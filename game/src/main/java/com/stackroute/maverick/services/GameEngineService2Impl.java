package com.stackroute.maverick.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.GameData;
import com.stackroute.maverick.repositories.GameDataRepo;

@Service
public class GameEngineService2Impl implements GameEngineService2 {

	@Autowired
	GameDataRepo gamerepo;

	@Override
	public Iterable<GameData> getAllQuestions() {
		return gamerepo.findAll();
	}

	@Override
	public GameData store(GameData gData) {
		gamerepo.save(gData);
		return gData;
	}

	@Override
	public void deleteAll() {
		gamerepo.deleteAll();
	}

	@Override
	public GameData findByQId(int qId) {
		GameData data = gamerepo.findByQId(qId);
		return data;
	}

}
