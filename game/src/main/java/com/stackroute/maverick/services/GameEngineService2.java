package com.stackroute.maverick.services;

import com.stackroute.maverick.domain.GameData;

public interface GameEngineService2 {
	public Iterable<GameData> getAllQuestions();

	public GameData store(GameData gData);

	public void deleteAll();

	public GameData findByQId(int qId);
}
