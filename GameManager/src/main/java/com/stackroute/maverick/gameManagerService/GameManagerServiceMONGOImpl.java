	package com.stackroute.maverick.gameManagerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.MultiPlayerGame;
import com.stackroute.maverick.domain.Topic;
import com.stackroute.maverick.repository.CategoryRepository;
import com.stackroute.maverick.repository.GameManagerMultiPlayerRepository;
import com.stackroute.maverick.repository.GameManagerRepository;



/**
 * @author sushmita
 *
 */


/**
 * Implementation of Game Manager Service Interface
 *
 */

@Service
public class GameManagerServiceMONGOImpl implements GameManagerService{
	
	/*calling single player game manager repository.*/
	GameManagerRepository gameManagerRepository;
	
	/*calling from category repository*/
	CategoryRepository categoryRepo;
	
	
	@Autowired
	GameManagerMultiPlayerRepository multiPlayerGameManagerRepository;
	
		/*Constructor for repository*/
	@Autowired
	public 	GameManagerServiceMONGOImpl(GameManagerRepository gameManagerRepository)
	{
		super();
		this.gameManagerRepository = gameManagerRepository;
	}
	
	
	/*for creating the new game*/
	@Override
	public Game addGameManager(Game gameManager)
	{
		//System.out.println(gameManager.getQuestionLevels().getAdvlevel());
		try
		{System.out.println("In service");
			gameManagerRepository.save(gameManager);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return gameManager;
	}
	
	
	/*method used in main controller to get all games for single player */
	@Override
	public Iterable<Game> getAllGameManagers() {
		Iterable<Game> gameManagerlist = gameManagerRepository.findAll();
				return gameManagerlist;
	}

	/*method used to store all the questions in the repository*/
	@Override
	public Game saveQuestions(Game game) {
		// TODO Auto-generated method stub
		Game gameSaveQuestionList = gameManagerRepository.save(game);
		return gameSaveQuestionList;
	}

	/*method used to find game by id*/
	@Override
	public Game findByGameId(int id) {
		Game gameById = gameManagerRepository.findByGameId(id);
		return gameById;
	}

	/*method used to update game by game id*/
	@Override
	public Game updateGameById(int id, Game game) {
		Game updateGame = gameManagerRepository.save(game);
		return updateGame;
	}

	/*method used to find game by game name
	 * used by search service to serch the game by name*/
	@Override
	public Game[] findByGameNameStartsWith(String gameName) {
		// TODO Auto-generated method stub
		Game[] gameByName = gameManagerRepository.findByGameNameStartsWithIgnoreCase(gameName);
		return gameByName;
	}

	/*method used to find game by game name
	 * used by search service to serch the game by name*/
	@Override
	public Game findByGameName(String gameName) {
		// TODO Auto-generated method stub
		Game gameByName = gameManagerRepository.findByGameName(gameName);
		return gameByName;
	}

	
	/*method used to store data in category repository*/
	@Override
	public Category saveCategories(Category category) {
		Category saveCategoryList = categoryRepo.save(category);
		return saveCategoryList;
	}


	/*creates game for multi player*/
	@Override
	public MultiPlayerGame addMultiPlayerGame(MultiPlayerGame multiPlayerGame) {
		try
		{
			multiPlayerGameManagerRepository.save(multiPlayerGame);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return multiPlayerGame;
	}

	/*this method gets the details of game using game id*/
	@Override
	public MultiPlayerGame findMultiGameById(int id) {
		MultiPlayerGame multiGameById = multiPlayerGameManagerRepository.findById(id).orElse(null);
		return multiGameById;
	}

	
	/*method used to find all games created for multi player*/
	@Override
	public Iterable<MultiPlayerGame> getAllMultiPlayerGame() {
		Iterable<MultiPlayerGame> multiGamelist = multiPlayerGameManagerRepository.findAll();
		return multiGamelist;
	}

	
	/*method to store all list of auto generated questions for multi player game*/
	@Override
	public MultiPlayerGame saveMultiPlayerQuestions(MultiPlayerGame multiPlayerGame) {
		MultiPlayerGame gameSaveAutoQuestionList = multiPlayerGameManagerRepository.save(multiPlayerGame);
		return gameSaveAutoQuestionList;
	}

	
	/*method to update all games for multi player game*/
	@Override
	public MultiPlayerGame updateMultiPlayerGameById(int id, MultiPlayerGame multiPlayerGame) {
		MultiPlayerGame updateMultiPlayerGame = multiPlayerGameManagerRepository.save(multiPlayerGame);
		return updateMultiPlayerGame;
	}

	
	/*method to find multi player game by game name*/
	@Override
	public MultiPlayerGame findByMultiPlayerGameName(String multiGameName) {
		MultiPlayerGame multiGameByName = multiPlayerGameManagerRepository.findByGameName(multiGameName);
		return multiGameByName;
	}


	@Override
	public void deleteByGameId(int id) {
		gameManagerRepository.deleteById(id);
	}

	@Override
	public List<Game> findGamesByTopicName(String topicName) {
		// TODO Auto-generated method stub
		return gameManagerRepository.findByTopic(topicName);
	}


	@Override
	public List<MultiPlayerGame> findMultiGamesByTopic(String multiPlayerGame) {
		// TODO Auto-generated method stub
		return multiPlayerGameManagerRepository.findMultiByTopic(multiPlayerGame);
	}


	@Override
	public MultiPlayerGame deleteMultiByGameId(int id, MultiPlayerGame multiGame) {
		// TODO Auto-generated method stub
		return null;
	}

	

	

	

	/*@Override
	public Game findByTopic(int questionLevel) {
		// TODO Auto-generated method stub
		
		return gameManagerRepository.findQuestionByTopic(questionLevel);
		
	}*/
	

	/*@Override
	public Game findGameById(int id) {
		Game foundQuestion = gameManagerRepository.findById(id).orElse(null);
		return foundQuestion;
	}*/

	
	/*@Override
	public boolean checkid(int id) {
		return gameManagerRepository.existsById(id);
	}*/
}
