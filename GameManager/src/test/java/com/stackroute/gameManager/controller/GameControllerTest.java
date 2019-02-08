/*package com.stackroute.gameManager.controller;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.stackroute.maverick.controller.GameManagerController;
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.GameQuestionLevel;
import com.stackroute.maverick.domain.GameQuestionScore;
import com.stackroute.maverick.domain.GameQuestionTime;
import com.stackroute.maverick.domain.Questions;
import com.stackroute.maverick.gameManagerService.GameManagerServiceMONGOImpl;


@RunWith(SpringRunner.class)
@WebMvcTest(value=GameManagerController.class, secure = false)
public class GameControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Mock
	Game game;
	
	@MockBean
	private GameManagerServiceMONGOImpl gameService;
	@Before
	public void set()
	{
	GameQuestionLevel gameQuestionLevel = new GameQuestionLevel(1, 5, 6); 
	GameQuestionScore gameQuestionScore = new GameQuestionScore(1, 5, 6);
	GameQuestionTime gameQuestionTime = new GameQuestionTime(1,5,6);
	User user = new User();
	Questions question = new Questions( 1, 2, "chemical form of water?", "manual", "2HO", "H2O2", "H2O", "none",);
	List<Questions> questions = new ArrayList<Questions>();
	questions.add(question);
	Game mockGame = new Game(6, "sush", new Date(), "World", "Travel", "SP", "java is a beautifull subject","description of single player cricket game","rules jbsjvl", 2666,  gameQuestionLevel, gameQuestionTime, gameQuestionScore, questions);
	
	
	String gameJson ="{\n" + 
			"    \"gameId\": 6,\n" + 
			"    \"createdBy\": \"sush\",\n" + 
			"    \"createdOn\": \"2018-04-23T18:25:43.511+0000\",\n" + 
			"    \"gameName\": \"World\",\n" + 
			"    \"gameImage\": null,\n" + 
			"    \"categoryName\": \"Travel\",\n" + 
			"    \"gameType\": \"SP\",\n" + 
			"    \"gameDescription\": \"java is a beautifull subject\",\n" + 
			"    \"gameRules\": \"this is a game with purpose\",\n" + 
			"    \"gamePopularity\": 2666,\n" + 
			"    \"questionLevels\": {\n" + 
			"        \"gqLevelId\": 1,\n" + 
			"        \"easyLevel\": 5,\n" + 
			"        \"mediumLevel\": 6,\n" + 
			"        \"advancedLevel\": 4\n" + 
			"    },\n" + 
			"    \"questionTime\": {\n" + 
			"        \"gqTimeId\": 1,\n" + 
			"        \"easyQuestionsTime\": 5,\n" + 
			"        \"mediumQuestionsTime\": 6,\n" + 
			"        \"advanceQuestionsTime\": 4\n" + 
			"    },\n" + 
			"    \"questionScore\": {\n" + 
			"        \"gqScoreId\": 1,\n" + 
			"        \"easyQuestionsScore\": 5,\n" + 
			"        \"mediumQuestionsScore\": 6,\n" + 
			"        \"advanceQuestionsScore\": 4\n" + 
			"    },\n" + 
			"    \"questions\": [\n" + 
			"        {\n" + 
			"            \"questionId\": 221,\n" + 
			"            \"questionLevel\": 2,\n" + 
			"            \"questionStem\": \"heighest runscorer in odis?\",\n" + 
			"            \"option1\": \"virak\",\n" + 
			"            \"option2\": \"ponting\",\n" + 
			"            \"option3\": \"sachin\",\n" + 
			"            \"option4\": \"kallis\",\n" + 
			"            \"correctAnswer\": \"sachin\"\n" + 
			"        }\n" + 
			"    ]\n" + 
			"}";
	}
	

	@Test
	public void showAllGametest() throws Exception {
		
		GameQuestionLevel gameQuestionLevel = new GameQuestionLevel(1, 5, 6); 
		GameQuestionScore gameQuestionScore = new GameQuestionScore(1, 5, 6);
		GameQuestionTime gameQuestionTime = new GameQuestionTime(1,5,6);
		Questions question = new Questions(221, 2, "heighest runscorer in odis?", "virak", "ponting", "sachin", "kallis", "sachin" );
		List<Questions> questions = new ArrayList<Questions>();
		questions.add(question);
	//	Game mockGame = new Game(6, "sush", new Date(), "World", "Travel", "SP", "java is a beautifull subject","description of single player cricket game","rules jbsjvl", 2666,  gameQuestionLevel, gameQuestionTime, gameQuestionScore, questions);
		
		List<Game> games = Arrays.asList(new Game(6, "sush", new Date(), "World", "Travel", "SP", "java is a beautifull subject","description of single player cricket game","rules jbsjvl", 2666,  gameQuestionLevel, gameQuestionTime, gameQuestionScore, questions));
		
		Mockito.when(gameService.getAllGameManagers()).thenReturn(games);
		
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
                "/api/game/gameManager").accept(
                MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        
        String expectedGameQuestionLevel= "{gqLevelId:1,easyLevel: 5, mediumLevel:6,advancedLevel :4 }";
        String expectedGameQuestionTime= "{gqTimeId:1, easyQuestionsTime:5, mediumQuestionsTime:6, advanceQuestionsTime:4 }";
        String expectedGameQuestionScore= "{gqScoreId:1, easyQuestionsScore:5, mediumQuestionsScore:6, advanceQuestionsScore:4 }";
        String expectedQuestions = "[{questionId:221, questionLevel:2, questionStem:\"heighest runscorer in odis?\",  option1:\"virak\", option2:\"ponting\", option3:\"sachin\", option4:\"kallis\", correctAnswer:\"sachin\"  }]";
        String expected = "[{gameId:7,createdBy:\"rex\",createdOn: new Date(), gameName:\"cuisine\", gameImage: \"image1\", categoryName: \"food\", gameType: \"SP\", gameDescription:  \"food is a beautifull subject\", gameRules: \"this is a game with purpose\", gamePopularity: 2666, questionLevels, questionTime, questionScore, questions }]";

        
        JSONAssert.assertEquals(expectedGameQuestionLevel, result.getResponse()
                .getContentAsString(), false);
        
        JSONAssert.assertEquals(expectedGameQuestionTime, result.getResponse()
                .getContentAsString(), false);
        
        JSONAssert.assertEquals(expectedGameQuestionScore, result.getResponse()
                .getContentAsString(), false);
        
        JSONAssert.assertEquals(expectedQuestions, result.getResponse()
                .getContentAsString(), false);
        
        JSONAssert.assertEquals(expected, result.getResponse()
                .getContentAsString(), false);
        
	}

	
}*/