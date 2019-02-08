package com.stackroute.maverick.gameManagerService;

import java.util.List;

import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.MultiPlayerGame;
import com.stackroute.maverick.domain.Topic;

public interface GameManagerService {
	
	
	public Game addGameManager(Game gameManager);
	public List<Game> findGamesByTopicName(String topicName);
	
	public Game findByGameId(int id);
	public Game[] findByGameNameStartsWith(String gameName);
	public Iterable<Game> getAllGameManagers();
	public Game saveQuestions(Game game);
	public Category saveCategories(Category category);
	public Game updateGameById(int id, Game game);
	public Game findByGameName(String gameName);	
	public void deleteByGameId(int gameId);
	
	
	public  MultiPlayerGame addMultiPlayerGame(MultiPlayerGame multiPlayerGame);
	public List<MultiPlayerGame> findMultiGamesByTopic(String multiPlayerGame);
	
	public  MultiPlayerGame findMultiGameById(int id);
	public MultiPlayerGame findByMultiPlayerGameName(String multiGameName);
	public Iterable<MultiPlayerGame> getAllMultiPlayerGame();
	public MultiPlayerGame saveMultiPlayerQuestions(MultiPlayerGame multiPlayerGame);
	public MultiPlayerGame updateMultiPlayerGameById(int id, MultiPlayerGame multiPlayerGame);
	public MultiPlayerGame deleteMultiByGameId(int id, MultiPlayerGame multiGame);

}
