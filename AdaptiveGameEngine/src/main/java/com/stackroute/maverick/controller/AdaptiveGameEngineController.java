package com.stackroute.maverick.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
//import com.netflix.appinfo.InstanceInfo;
//import com.netflix.discovery.EurekaClient;
//import com.netflix.discovery.shared.Application;
import com.stackroute.maverick.domain.AdaptiveOption;
import com.stackroute.maverick.domain.AdaptiveQuestion;
import com.stackroute.maverick.domain.AdaptiveResponseQuestion;
import com.stackroute.maverick.domain.AdaptiveResult;
import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.Questions;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.service.KafkaProducer;
import com.stackroute.maverick.service.AdaptiveGameEngineService;
//import com.stackroute.maverick.service.KafkaProducer;

import io.micrometer.core.annotation.Timed;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RefreshScope
@RequestMapping("/api/v1/adaptiveGameEngine")
@RestController
@CrossOrigin("*")
@Api(value = "AdaptiveGameEngineControllerApi", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdaptiveGameEngineController {

	private AdaptiveGameEngineService adaptiveService;
	
    @Autowired

    private RestTemplate restTemplate;

    @Value("${service.gameManagerIPAddress}")

    private String gameManagerIPAddress;
    
    private List<Questions> questionsInL1;
    
    private List<Questions> questionsInL2;
    
    private List<Questions> questionsInL3;
    
    private List<AdaptiveResponseQuestion> response;
    
    private AdaptiveResult adaptiveResult;
    
    private int category_id;
    
    private int topic_id;
    
    private int user_id;
    
    private int game_id;
    
    private String game_name;
    
    int i1,i2,i3,last;
    
    Date date ;
    DateFormat dateFormat ;
    String strDate ;
    
    @Autowired
	private SimpMessageSendingOperations msgTemplate;
	
	int i=0;

	@Autowired
	KafkaProducer producer;

	Logger log = LoggerFactory.getLogger(AdaptiveGameEngineController.class);

	@Autowired
	public AdaptiveGameEngineController(AdaptiveGameEngineService adaptiveService) {
		this.adaptiveService = adaptiveService;
		date = new Date();
        dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
        strDate = dateFormat.format(date);
        questionsInL1=new ArrayList<Questions>();
        
        questionsInL2=new ArrayList<Questions>();
        
        questionsInL3=new ArrayList<Questions>();
        
        response=new ArrayList<AdaptiveResponseQuestion>();
        
        adaptiveResult=new AdaptiveResult();
        i=0;
        i1=0;
        i2=0;
        i3=0;
        last=0;
        game_name="";
	}
	
	//method for getting data from question generator
	
	@RequestMapping("/gameManagerData")
    public Game[] gettingDataFromGameManager() throws NullPointerException{
		
		//url of game manager service
		
       String url=gameManagerIPAddress+"/api/game/games";
       
       //getting data using rest templete

        Game[] game = restTemplate.getForObject(url, Game[].class);
        
       for(int i=0;i<game.length;i++)
     {
    	    //checking whether a category node exist or not
    	   
        	if(adaptiveService.checkCategoryId(game[i].getCategoryId()).size()==0)
        	{
        		//creating a new category node
        		
        		adaptiveService.addCategory(game[i].getCategoryId(), strDate);
         	}
        	
        	//checking whether a topic node exist or not
        	
        	if(adaptiveService.checkTopicId(game[i].getTopic().getTopicId()).size()==0)
        	{
        	   //creating a new topic node	
        	
       		adaptiveService.addTopic(game[i].getCategoryId(), game[i].getTopic().getTopicId(), strDate);
        	}
       	for(int j=0;j<game[i].getTopic().getQuestions().size();j++)
       	{
       		//checking whether a question exist in any level or not
       		if(adaptiveService.checkQuestionIdForLevel1(game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId()).size()==0 & adaptiveService.checkQuestionIdForLevel2(game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId()).size()==0 & adaptiveService.checkQuestionIdForLevel3(game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId()).size()==0)
        		{ 
       			 //comparing the question level is 1 or not
        			if(game[i].getTopic().getQuestions().get(j).getQuestionLevel()==1)
       			{
        				//adding the question in level 1
        				
        				adaptiveService.addQuestionInLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), game[i].getTopic().getQuestions().get(j).getQuestionStem(), strDate);
        				
        				//checking for the correct answer in option
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption1()))
        				{
        					//adding the new option node with correct answer relation as true
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 1, game[i].getTopic().getQuestions().get(j).getOption1(), true, strDate);
        			    }
        				else
       				    {
        					//adding the new option node with correct answer relation as false
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 1, game[i].getTopic().getQuestions().get(j).getOption1(), false, strDate);
        				}
        				//checking for the correct answer in option
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption2()))
        				{
        					//adding the new option node with correct answer relation as true
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 2, game[i].getTopic().getQuestions().get(j).getOption2(), true, strDate);
        			    }
        				else
        				{
        					//adding the new option node with correct answer relation as false
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 2, game[i].getTopic().getQuestions().get(j).getOption2(), false, strDate);
        				}
        				//checking for the correct answer in option
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption3()))
        				{
        					//adding the new option node with correct answer relation as true
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 3, game[i].getTopic().getQuestions().get(j).getOption3(), true, strDate);
        			    }
        				else
        				{
        					//adding the new option node with correct answer relation as false
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 3, game[i].getTopic().getQuestions().get(j).getOption3(), false, strDate);
        				}
        				//checking for the correct answer in option
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption4()))
        				{
        					//adding the new option node with correct answer relation as true
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 4, game[i].getTopic().getQuestions().get(j).getOption4(), true, strDate);
        			    }
        				else
        				{
        					//adding the new option node with correct answer relation as false
        					adaptiveService.addOptionInQuestionOfLevel1(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 4, game[i].getTopic().getQuestions().get(j).getOption4(), false, strDate);
        				}
        			}//same as level 1
        			else if(game[i].getTopic().getQuestions().get(j).getQuestionLevel()==2)
        			{
        				adaptiveService.addQuestionInLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), game[i].getTopic().getQuestions().get(j).getQuestionStem(), strDate);
        				
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption1()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 1, game[i].getTopic().getQuestions().get(j).getOption1(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 1, game[i].getTopic().getQuestions().get(j).getOption1(), false, strDate);
        				}
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption2()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 2, game[i].getTopic().getQuestions().get(j).getOption2(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 2, game[i].getTopic().getQuestions().get(j).getOption2(), false, strDate);
        				}
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption3()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 3, game[i].getTopic().getQuestions().get(j).getOption3(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 3, game[i].getTopic().getQuestions().get(j).getOption3(), false, strDate);
        				}
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption4()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 4, game[i].getTopic().getQuestions().get(j).getOption4(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel2(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 4, game[i].getTopic().getQuestions().get(j).getOption4(), false, strDate);
        				}
        			}//same as level 1
        			else if(game[i].getTopic().getQuestions().get(j).getQuestionLevel()==3)
        			{

        				adaptiveService.addQuestionInLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), game[i].getTopic().getQuestions().get(j).getQuestionStem(), strDate);
        				
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption1()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 1, game[i].getTopic().getQuestions().get(j).getOption1(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 1, game[i].getTopic().getQuestions().get(j).getOption1(), false, strDate);
        				}
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption2()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 2, game[i].getTopic().getQuestions().get(j).getOption2(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 2, game[i].getTopic().getQuestions().get(j).getOption2(), false, strDate);
        				}
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption3()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 3, game[i].getTopic().getQuestions().get(j).getOption3(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 3, game[i].getTopic().getQuestions().get(j).getOption3(), false, strDate);
        				}
        				if(game[i].getTopic().getQuestions().get(j).getCorrectAnswer().equalsIgnoreCase(game[i].getTopic().getQuestions().get(j).getOption4()))
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 4, game[i].getTopic().getQuestions().get(j).getOption4(), true, strDate);
        			    }
        				else
        				{
        					adaptiveService.addOptionInQuestionOfLevel3(game[i].getCategoryId(), game[i].getTopic().getTopicId(), game[i].getTopic().getQuestions().get(j).getQuestionId(), 4, game[i].getTopic().getQuestions().get(j).getOption4(), false, strDate);
        				}
      			}
       		}
       	}
       }
        
        return game;

    }
	
	//method is for loading all the question with non attempted questions
	
	@Timed(value = "adaptiveQuestionMethod()", histogram = true, percentiles = { 0.95 }, extraTags = {"version", "1.0" })
   @GetMapping("/{category_id}/{topic_id}/{game_id}/{user_id}/{game_name}")
   public List<Questions> allQuestions(@PathVariable("category_id") int category_id,@PathVariable("topic_id") int topic_id,@PathVariable("game_id") int game_id,@PathVariable("user_id") int user_id,@PathVariable("game_name") String game_name)
   {
	   Random rnd = new Random();
	   i1=0;
	   i2=0;
	   i3=0;
	   this.i=0;
	   this.user_id=user_id;
	   this.category_id=category_id;
	   this.topic_id=topic_id;
	   this.game_id=game_id;
	   this.game_name=game_name;
	   adaptiveResult=new AdaptiveResult();
	   adaptiveResult.setGame_session_id(rnd.nextInt(900000) + rnd.nextInt(900000));
	   adaptiveResult.setCategory_id(category_id);
	   adaptiveResult.setTopic_id(topic_id);
	   adaptiveResult.setGame_id(game_id);
	   adaptiveResult.setUser_id(user_id);
	   adaptiveResult.setGame_name(game_name);
	   //getting list of all question in respective level
	   List<AdaptiveQuestion> questionsAttemptedInL1=new ArrayList<AdaptiveQuestion>();
	   List<AdaptiveQuestion> questionsAttemptedInL2=new ArrayList<AdaptiveQuestion>();
	   List<AdaptiveQuestion> questionsAttemptedInL3=new ArrayList<AdaptiveQuestion>();
	  
	 //getting list of all attempted question by user in respective level
		  questionsAttemptedInL1=adaptiveService.questionsAnsweredByUserInLevel1(user_id, topic_id, category_id);
		  questionsAttemptedInL2=adaptiveService.questionsAnsweredByUserInLevel2(user_id, topic_id, category_id);
		  questionsAttemptedInL3=adaptiveService.questionsAnsweredByUserInLevel3(user_id, topic_id, category_id);
	  
	   List<AdaptiveQuestion> questionInL1=adaptiveService.listOfQuestionInLevel1(category_id, topic_id);
	   
	   List<AdaptiveOption> option;
	   //removing the attempted question from all list of question in level 1
	   if(questionInL1.size()!=0)
	   {
		   
		   if(questionsAttemptedInL1.size()!=0)
		   {

			   for(int k=0;k<questionsAttemptedInL1.size();k++)
			   {
				   for(int j=0;j<questionInL1.size();j++)
				   {
					   if(questionInL1.get(j).getQuestionId()==questionsAttemptedInL1.get(k).getQuestionId())
					   {
						   questionInL1.remove(j);
					   }
				   }
			   }
		   }
		   
		 //adding the question details in question object of level 1  
	   for(int i=0;i<questionInL1.size();i++)
	   {
		   Questions question=new Questions();
		   question.setQuestionId(questionInL1.get(i).getQuestionId());
		   question.setQuestionStem(questionInL1.get(i).getQuestionStem());
		   question.setQuestionLevel(1);
		   option=adaptiveService.listOfOptionInQuestionInLevel1(category_id, topic_id, questionInL1.get(i).getQuestionId());
		   
		   for(int j=0;j<option.size();j++)
		   {
			 
			   if(option.get(j).getOption_id()==1)
			   {
				  
				   question.setOption1(option.get(j).getOption_value());
			   }
			   if(option.get(j).getOption_id()==2)
			   {
				   
				   question.setOption2(option.get(j).getOption_value());
			   }
			   if(option.get(j).getOption_id()==3)
			   {
				   
				   question.setOption3(option.get(j).getOption_value());
			   }
			   if(option.get(j).getOption_id()==4)
			   {
				   
				   question.setOption4(option.get(j).getOption_value());
			   }
		   }
		   
		   question.setCorrectAnswer(adaptiveService.correctOptionInQuestionInLevel1(category_id, topic_id, questionInL1.get(i).getQuestionId()).get(0).getOption_value());
		   questionsInL1.add(question);
		   
	   }
	   }
	   List<AdaptiveQuestion> questionInL2=adaptiveService.listOfQuestionInLevel2(category_id, topic_id);
	   
	   List<AdaptiveOption> option2;
	 //removing the attempted question from all list of question in level 2
	   if(questionInL2.size()!=0)
	   {
		   if(questionsAttemptedInL2.size()!=0)
		   {

			   for(int k=0;k<questionsAttemptedInL2.size();k++)
			   {
				   for(int j=0;j<questionInL2.size();j++)
				   {
					   if(questionInL2.get(j).getQuestionId()==questionsAttemptedInL2.get(k).getQuestionId())
					   {
						   questionInL2.remove(j);
					   }
				   }
			   }
		   }
		   //adding the question details in question object of level 2  
	   for(int i=0;i<questionInL2.size();i++)
	   {
		   Questions question=new Questions();
		   question.setQuestionId(questionInL2.get(i).getQuestionId());
		   question.setQuestionStem(questionInL2.get(i).getQuestionStem());
		   question.setQuestionLevel(2);
		   option2=adaptiveService.listOfOptionInQuestionInLevel2(category_id, topic_id, questionInL2.get(i).getQuestionId());
		   for(int j=0;j<option2.size();j++)
		   {
			   if(option2.get(j).getOption_id()==1)
			   {
				   question.setOption1(option2.get(j).getOption_value());
			   }
			   if(option2.get(j).getOption_id()==2)
			   {
				   question.setOption2(option2.get(j).getOption_value());
			   }
			   if(option2.get(j).getOption_id()==3)
			   {
				   question.setOption3(option2.get(j).getOption_value());
			   }
			   if(option2.get(j).getOption_id()==4)
			   {
				   question.setOption4(option2.get(j).getOption_value());
			   }
		   }
		   
		   question.setCorrectAnswer(adaptiveService.correctOptionInQuestionInLevel2(category_id, topic_id, questionInL2.get(i).getQuestionId()).get(0).getOption_value());
		   questionsInL2.add(question);
		   
	   }
	   }
	   
	   List<AdaptiveQuestion> questionInL3=adaptiveService.listOfQuestionInLevel3(category_id, topic_id);
	   
	   List<AdaptiveOption> option3;
	 //removing the attempted question from all list of question in level 3
	   if(questionInL3.size()!=0)
	   {
		   if(questionsAttemptedInL3.size()!=0)
		   {

			   for(int k=0;k<questionsAttemptedInL3.size();k++)
			   {
				   for(int j=0;j<questionInL3.size();j++)
				   {
					   if(questionInL3.get(j).getQuestionId()==questionsAttemptedInL3.get(k).getQuestionId())
					   {
						   questionInL3.remove(j);
					   }
				   }
			   }
		   }
		   ////adding the question details in question object of level 3
	   for(int i=0;i<questionInL3.size();i++)
	   {
		   Questions question=new Questions();
		   question.setQuestionId(questionInL3.get(i).getQuestionId());
		   question.setQuestionStem(questionInL3.get(i).getQuestionStem());
		   question.setQuestionLevel(3);
		   option3=adaptiveService.listOfOptionInQuestionInLevel3(category_id, topic_id, questionInL3.get(i).getQuestionId());
		   for(int j=0;j<option3.size();j++)
		   {
			   if(option3.get(j).getOption_id()==1)
			   {
				   question.setOption1(option3.get(j).getOption_value());
			   }
			   if(option3.get(j).getOption_id()==2)
			   {
				   question.setOption2(option3.get(j).getOption_value());
			   }
			   if(option3.get(j).getOption_id()==3)
			   {
				   question.setOption3(option3.get(j).getOption_value());
			   }
			   if(option3.get(j).getOption_id()==4)
			   {
				   question.setOption4(option3.get(j).getOption_value());
			   }
		   }
		   
		   question.setCorrectAnswer(adaptiveService.correctOptionInQuestionInLevel3(category_id, topic_id, questionInL3.get(i).getQuestionId()).get(0).getOption_value());
		   questionsInL3.add(question);
		   
	   }
	   }
	   return questionsInL1;
	   
   }
	//method used while cocket data passing
   @MessageMapping("/message")
   @SendTo("/topic/reply")
	public Questions processMessageFromClient(@Payload String message) throws Exception {
	    int score=0;
	    //getting the data response
	   	String answer = new Gson().fromJson(message, Map.class).get("selectedResponse").toString();
	   	//implementing the algorithm
		if(i!=0)
		{
			response.get(i-1).setUserAnswered(answer);
		}
		  Questions questions=new Questions();
		   if(i1<=3 | i2==0)
		   {
		   questions=questionsInL1.get(i1);
		   i1++;
		   }
		   if(i1>3 && i2==0)
		   {
			   last=response.size();
			
			for(int j=0;j<response.size();j++)
			{
				
				if(response.get(j).getCorrectAnswer().equals(response.get(j).getUserAnswered()))
				{
					
					score++;
					
				}
			}
			System.out.println("l1 =="+score);
			float v=((score*100)/response.size());
			System.out.println("l1 % =="+v);
			
			if(v>=60)
			{
				
				questions=questionsInL2.get(i2);
				
				i2++;
			
			}
			
		   }
		   if(i2 > 0 && i2 <= 4)
		   {
			   questions=questionsInL2.get(i2); 
			   i2++;
		   }
		  
		   System.out.println("left="+last);
		   System.out.println("l2="+i2);
		   if(i2 > 4 && i3 == 0)
		   {
			System.out.println("lll="+i2);
			for(int j=last;j<response.size();j++)
			{
				System.out.println("1");
				if(response.get(j).getCorrectAnswer().equals(response.get(j).getUserAnswered()))
				{
					System.out.println("2");
					score++;
					System.out.println("score="+score);
				}
			}
			System.out.println("score outside="+score);
			float v=((score*100)/(response.size()-last));
			System.out.println("hello = "+v);
			if(v>=60)
			{
				System.out.println("3");
				questions=questionsInL3.get(i3);
				System.out.println("-----------"+questions.getQuestionLevel());
				i3++;
			
			}
			else
			{
				questions=questionsInL2.get(i2); 
				   i2++;
			}
		   }
		   if(i3>0)
		   {
			   questions=questionsInL3.get(i3); 
			   i3++;
		   }
		   
		AdaptiveResponseQuestion adaptiveResponseQuestion=new AdaptiveResponseQuestion();
		adaptiveResponseQuestion.setQuestionId(questions.getQuestionId());
		adaptiveResponseQuestion.setQuestionLevel(questions.getQuestionLevel());
		adaptiveResponseQuestion.setQuestionStem(questions.getQuestionStem());
		adaptiveResponseQuestion.setOption1(questions.getOption1());
		adaptiveResponseQuestion.setOption2(questions.getOption2());
		adaptiveResponseQuestion.setOption3(questions.getOption3());
		adaptiveResponseQuestion.setOption4(questions.getOption4());
		adaptiveResponseQuestion.setCorrectAnswer(questions.getCorrectAnswer());
		if(i<10)
		{
		response.add(adaptiveResponseQuestion);
		}
		if(i==10)
		{
		adaptiveResult.setResponse(response);
		producer.sendResult(adaptiveResult);
		populatingGraphAfterGamePlayed();
		System.out.println(adaptiveResult);
		}
		i++;
		
		System.out.println("answer Getting..."+answer);
		return questions;
	}
   @MessageExceptionHandler
   public String handleException(Throwable exception) {
		msgTemplate.convertAndSend("/errors", exception.getMessage());
	    return exception.getMessage();
   }
   
   @RequestMapping("/adaptiveResult")
   public ResponseEntity<AdaptiveResult> sendResult()
   {
	   return new ResponseEntity<AdaptiveResult>(this.adaptiveResult,HttpStatus.OK);
   }
   public void populatingGraphAfterGamePlayed()
   {
	   if(adaptiveService.checkUserId(adaptiveResult.getUser_id()).size()==0)
	   {
		   adaptiveService.createUSer(user_id, strDate);
		  
	   }
	   
	   adaptiveService.relateUserWithTopic(adaptiveResult.getUser_id(), adaptiveResult.getTopic_id(), adaptiveResult.getCategory_id());
	   
	   for(int k=0;k<adaptiveResult.getResponse().size();k++)
	   {
		   if(adaptiveResult.getResponse().get(k).getQuestionLevel()==1)
		   {
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption1()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel1(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 1, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption2()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel1(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 2, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption3()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel1(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 3, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption4()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel1(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 4, adaptiveResult.getUser_id());
			   }
		   }
		   if(adaptiveResult.getResponse().get(k).getQuestionLevel()==2)
		   {
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption1()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel2(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 1, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption2()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel2(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 2, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption3()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel2(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 3, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption4()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel2(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 4, adaptiveResult.getUser_id());
			   } 
		   }
		   if(adaptiveResult.getResponse().get(k).getQuestionLevel()==3)
		   {
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption1()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel3(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 1, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption2()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel3(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 2, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption3()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel3(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 3, adaptiveResult.getUser_id());
			   }
			   if(adaptiveResult.getResponse().get(k).getUserAnswered().equals(adaptiveResult.getResponse().get(k).getOption4()))
			   {
				   adaptiveService.optionAnsweredByUserInLevel3(adaptiveResult.getCategory_id(), adaptiveResult.getTopic_id(), adaptiveResult.getResponse().get(k).getQuestionId(), 4, adaptiveResult.getUser_id());
			   }  
		   }
	   }
   }
	
}
