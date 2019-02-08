package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;

import com.stackroute.maverick.domain.GameData;

public interface GameDataRepo extends CrudRepository<GameData, Integer> {

	/*
	 * getting the data through id
	 */
	GameData findByQId(int qId);
}