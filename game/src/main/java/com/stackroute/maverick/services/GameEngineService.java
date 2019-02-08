package com.stackroute.maverick.services;

import com.stackroute.maverick.domain.Game;

public interface GameEngineService {

	public Iterable<Game> getAllQuestions();

	public Game storeQuestion(Game actualData);

}