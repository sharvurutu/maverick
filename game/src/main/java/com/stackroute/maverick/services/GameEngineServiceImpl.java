package com.stackroute.maverick.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.repositories.ActualDataRepo;

@Service
public class GameEngineServiceImpl implements GameEngineService {

	@Autowired
	private ActualDataRepo actualDataRepo;

	@Override
	public Iterable<Game> getAllQuestions() {
		return actualDataRepo.findAll();
	}

	@Override
	public Game storeQuestion(Game actualData) {
		actualDataRepo.save(actualData);
		return actualData;
	}

}
