package com.stackroute.maverick.kafka;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.GameData;
import com.stackroute.maverick.domain.GameQuestionLevel;
import com.stackroute.maverick.domain.Questions;
import com.stackroute.maverick.repositories.ActualDataRepo;
import com.stackroute.maverick.services.GameEngineService;
import com.stackroute.maverick.services.GameEngineService2;

public class Receiver {

	@Autowired
	private GameEngineService gameEngineService;

	@Autowired
	private GameEngineService2 game;

	@Autowired
	private ActualDataRepo actualDataRepo;

	/*
	 * KafkaListner listens to the topic mentioned and saves the data each time if
	 * there is a change in the topic
	 */
	@KafkaListener(topics = "gameManager.t")
	public void receiver1(Game obj) {
		actualDataRepo.deleteAll();
		System.out.println("actual data deleted");
		System.out.println("Kafka Questions Fetched");
		System.out.println(obj);
		Game data = obj;
		gameEngineService.storeQuestion(data);
		storeData();
	}

	public void storeData() {
		game.deleteAll();
		Iterable<Game> data = gameEngineService.getAllQuestions();
		List<Questions> quest = data.iterator().next().getQuestions();
		GameData gData = new GameData();
		gData.setUserId(data.iterator().next().getUserId());
		gData.setGameId(data.iterator().next().getGameId());
		gData.setCategoryId(data.iterator().next().getCategoryId());
		gData.setGameName(data.iterator().next().getGameName());
		gData.setGameImage(data.iterator().next().getGameImage());
		gData.setGameType(data.iterator().next().getGameType());
		gData.setqLevels(data.iterator().next().getQuestionLevels());

		GameQuestionLevel gl = data.iterator().next().getQuestionLevels();
		int a = gl.getAdvancedLevel();
		int b = gl.getMediumLevel();
		int c = gl.getEasyLevel();
		int sum = a + b + c;
		System.out.println("no.of q--" + sum);
		gData.setTotalQuestions(sum);

		gData.setQuestionScore(data.iterator().next().getQuestionScore());
		gData.setQuestionTime(data.iterator().next().getQuestionTime());
		for (Questions q : quest) {
			int i = 0;
			String arr[] = new String[4];
			gData.setqId(q.getQuestionId());

			gData.setQuestionLevel(q.getQuestionLevel());

			gData.setQuestion(q.getQuestionStem());
			System.out.println(q.getQuestionStem());

			gData.setcAns(q.getCorrectAnswer());

			arr[i] = q.getOption1();
			arr[i + 1] = q.getOption2();
			if (!q.getOption3().equals("")) {
				arr[i + 2] = q.getOption3();
			}
			if (!q.getOption4().equals("")) {
				arr[i + 3] = q.getOption4();
			}
			gData.setOptions(arr);
			game.store(gData);
		}
		actualDataRepo.deleteAll();
	}

}