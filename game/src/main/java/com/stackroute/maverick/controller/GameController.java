package com.stackroute.maverick.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.maverick.domain.GameData;
import com.stackroute.maverick.domain.PlayedQuestions;
import com.stackroute.maverick.domain.SinglePlayerResult;
import com.stackroute.maverick.kafka.Sender;
import com.stackroute.maverick.repositories.GameDataRepo;
import com.stackroute.maverick.services.GameEngineService2;

import io.micrometer.core.annotation.Timed;

@CrossOrigin("*")
@RequestMapping("api/v1")
@RestController
public class GameController {

	/*
	 * Autowiring different services
	 */
	private GameEngineService2 game;

	@Autowired
	private Sender sender;

	@Autowired
	GameDataRepo repo;

	@Autowired
	public GameController(GameEngineService2 game) {
		super();
		this.game = game;
	}

	@Timed(value = "quiz.game-engine.PostID", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/details/{gameTypeId}/{userId}/{id}", method = RequestMethod.GET)
	public void sendId(@PathVariable("gameTypeId") int gameTypeId, @PathVariable("userId") int userId,
			@PathVariable("id") int gameId) {
		System.out.println("kafka hit" + gameId);
		int[] sendData = new int[2];
		sendData[0] = gameId;
		sendData[1] = userId;
		sender.send(sendData);
	}

	/*
	 * gets the questions along with options and rules to be used for game
	 */
	@Timed(value = "quiz.game-engine.GetQuestionsrequest", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/getdata", method = RequestMethod.GET)
	public ResponseEntity<Iterable<GameData>> getData() {
		Iterable<GameData> gamesData = game.getAllQuestions();
		return new ResponseEntity<Iterable<GameData>>(gamesData, HttpStatus.OK);

	}

	/*
	 * posting the result of a game played
	 */
	@Timed(value = "quiz.game-engine.postResultrequest", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/result/{score}", method = RequestMethod.POST)
	public void getResult(@RequestBody List<PlayedQuestions> result, @PathVariable("score") int score) {

		ArrayList<PlayedQuestions> list = new ArrayList<PlayedQuestions>();
		System.out.println("RESULTS FETCHED");
		System.out.println("Score---->>>>" + score);
		Random rand = new Random();
		int rand_int1 = rand.nextInt(1000);
		SinglePlayerResult res = new SinglePlayerResult();
		res.setGameSessionId(rand_int1);
		for (PlayedQuestions pq : result) {
			list.add(pq);
			System.out.println(pq.getCategoryId());
		}

		res.setPlayedData(list);
		res.setScore(score);
		sender.results(res);
		repo.deleteAll();
	}

}
