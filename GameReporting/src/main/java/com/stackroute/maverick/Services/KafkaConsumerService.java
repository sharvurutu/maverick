package com.stackroute.maverick.Services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.Repository.AdaptiveUserRepo;
import com.stackroute.maverick.Repository.MultiUserActivityRepo;
import com.stackroute.maverick.Repository.UserActivityRepo;
import com.stackroute.maverick.domain.AdaptiveResponseQuestion;
import com.stackroute.maverick.domain.AdaptiveResult;
import com.stackroute.maverick.domain.GameSessionDetails;
import com.stackroute.maverick.domain.ReportingData;
import com.stackroute.maverick.domain.PlayedQuestions;
import com.stackroute.maverick.domain.Question;
import com.stackroute.maverick.domain.SessionActivity;
import com.stackroute.maverick.domain.GameReports;
import com.stackroute.maverick.domain.SinglePlayerResult;
import com.stackroute.maverick.domain.UserActivity;

@Service
public class KafkaConsumerService {
	@Autowired
	UserActivityRepo userActivityRepo;
	@Autowired
	UserActivity userActivity;
	
	@Autowired
	AdaptiveUserRepo adaptiveuserrepo;
	@Autowired
	AdaptiveResult adaptiveresult;
	
	@Autowired
	MultiUserActivityRepo multiuseractivityrepo;
	@Autowired
	ReportingData multiplayerresult;
	
	@Bean
	public UserActivity userActivity() {

		return new UserActivity();
	}
	
	@Bean
	public AdaptiveResult adaptiveresult() {
		return new AdaptiveResult();
	}
	
	@Bean
	public ReportingData  multiplayerresult() {
		return new ReportingData();
	}

	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaConsumerService.class);

	@KafkaListener(topics = "Results3.t")
	public void receive(SinglePlayerResult gg) {
		LOGGER.info("received payload = {}", gg);

		// * System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		// * System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		// System.out.println("This is played questions" + gg.getPlayedData());
		// * gg.getGameSessionId();
		// * gg.getPlayedData();

		// userActivity.setUserId(gg.getPlayedData().iterator().next().getUserId());
		// *userActivity.setGameSessionDetails();

		GameSessionDetails ss = new GameSessionDetails();

		ss.setGameSessionId(gg.getGameSessionId());
		SessionActivity sessionActivity = new SessionActivity();

		// * List<SessionActivity> sessionActivityList = new
		// ArrayList<SessionActivity>();

		Question question = new Question();
		List<Question> questionList = new ArrayList<Question>();

		for (int i = 0; i < gg.getPlayedData().size(); i++) {
			sessionActivity.setGameId(gg.getPlayedData().get(i).getGameId());
			sessionActivity.setGameName(gg.getPlayedData().get(i).getGameName());
			sessionActivity.setGameTypeName(gg.getPlayedData().get(i).getGameType().getGameTypeName());

			// * sessionActivity.setQuestion(gg.getPlayedData().get(0).getQuestion());
			question.setQuestion(gg.getPlayedData().get(i).getQuestion());
			question.setOptions(gg.getPlayedData().get(i).getOptions());
			question.setCorrectAnswer(gg.getPlayedData().get(i).getcAns());
			question.setSelectedAnswer(gg.getPlayedData().get(i).getAnswer());
			// * questionList.add(question);
			// * sessionActivityList.add(sessionActivity);

			question.setOptions(gg.getPlayedData().get(i).getOptions());
			question.setCorrectAnswer(gg.getPlayedData().get(i).getcAns());
			question.setSelectedAnswer(gg.getPlayedData().get(i).getAnswer());

			questionList.add(question);

		}

		sessionActivity.setQuestion(questionList);

		// while (itr.hasNext())
		//
		// {
		// Question question1 = itr.next();
		// questionList.add(question1);
		//
		// }
		sessionActivity.setQuestion(questionList);
		ss.setSessionActivity(sessionActivity);
		userActivity.setGameSessionDetails(ss);

		// *
		// userActivity.getGameSessionDetails().setGameSessionId(gg.getGameSessionId());

		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setGameId(gg.getPlayedData().iterator().next().getGameId());
		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setGameName(gg.getPlayedData().iterator().next().getGameName());
		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setGameTypeName(gg.getPlayedData().iterator().next().getGameType().getGameTypeName());
		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setQuestion(gg.getPlayedData().iterator().next().getQuestion());
		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setOptions(gg.getPlayedData().iterator().next().getOptions());
		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setCorrectAnswer(gg.getPlayedData().iterator().next().getcAns());
		// *
		// userActivity.getGameSessionDetails().getSessionActivity().iterator().next().setSelectedAnswer(gg.getPlayedData().iterator().next().getAnswer());
		userActivityRepo.save(userActivity);
		LOGGER.info("saved data into database {}", userActivity.toString());
	}
	
	@KafkaListener(topics="multiplayerresult.ts")
	public void recieve(ReportingData mp)
	{
		LOGGER.info("Recieved Payload = {}",mp);
		System.out.println(mp);
		
		multiuseractivityrepo.save(mp);
		LOGGER.info("SHUD BE saved{}",mp);
		
	}
	
	@KafkaListener(topics="AdaptiveResult.t")
	public void recieve(AdaptiveResult ar)
	{
		
		LOGGER.info("Recieved Payload = {}",ar);
		adaptiveuserrepo.save(ar);
		
		List<AdaptiveResponseQuestion> questionList = new ArrayList<AdaptiveResponseQuestion>();
		for(int i=0;i<ar.getResponse().size();i++)
		{
			
		}
		System.out.println(ar);
		LOGGER.info("shud be saved{}",ar);
	}

	/*
	 * already commented before donot uncomment
	 * 
	 * @KafkaListener(topics="recommendation-gameIdS.t") public void recieve(String
	 * text) { LOGGER.info("recieved payload={}",text); System.out.println(text); }
	 */

}
