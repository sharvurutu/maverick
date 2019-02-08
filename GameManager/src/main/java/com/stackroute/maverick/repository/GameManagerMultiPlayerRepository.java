package com.stackroute.maverick.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.MultiPlayerGame;



/*CRUD Repository to perform crud operations*/
@Repository
public interface GameManagerMultiPlayerRepository extends CrudRepository<MultiPlayerGame,Integer> {

	
	MultiPlayerGame findByGameName(String multiGameName);
	MultiPlayerGame deleteMultiByGameId(int gameId);
	List<MultiPlayerGame> findMultiByTopic(String topicName);
}
