package com.stackroute.maverick.controller;

/**
 * @author Sushmita Kumari
 *
 */

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.stackroute.maverick.domain.Category;
//@CrossOrigin(origins = "http://localhost:4200")
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.GameType;
import com.stackroute.maverick.domain.MultiPlayerGame;
import com.stackroute.maverick.domain.Questions;
import com.stackroute.maverick.domain.Topic;
import com.stackroute.maverick.domain.Users;
import com.stackroute.maverick.gameManagerService.GameManagerService;
import com.stackroute.maverick.kafkaservices.KafkaProducer;
import com.stackroute.maverick.repository.CategoryRepository;
import com.stackroute.maverick.repository.GameManagerRepository;

import io.micrometer.core.annotation.Timed;

/* Controller */

@CrossOrigin(value = "*")
@JsonIgnoreProperties(ignoreUnknown = true)
@RequestMapping("api/game")
@RestController
public class GameManagerController {

	
	
	@Autowired
	GameManagerService gameManagerService;

	@Autowired
	KafkaProducer kafkaProducer;

	@Autowired
	CategoryRepository categoryRepo;

	@Autowired
	GameManagerRepository gameManagerRepository;
	
	
	@GetMapping(value = "/producer")
	public String producer(Game gameManager) {
		return "Message sent to the kafka topic game_manager successfully";
	}

	
	
	
	@Timed(value = "quiz.game-manager.addGameManager", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/gameManager", method = RequestMethod.POST)
	@CrossOrigin(origins = "*")
	public ResponseEntity<Game> addGameManager(@RequestBody Game gameManager) throws Exception {

		Game newGameManager = gameManagerService.addGameManager(gameManager);
		kafkaProducer.send(newGameManager);
		return new ResponseEntity<Game>(newGameManager, HttpStatus.OK);

	}

	
	
	@Timed(value = "quiz.game-manager.match", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/matching/{userId}/{gameId}", method = RequestMethod.GET)
	public void match(@PathVariable(value = "userId") int userId, @PathVariable(value = "gameId") int gameId)
			throws Exception {

		// System.out.println(gameManager.getQuestionLevels().getAdvlevel());

		/*
		 * kafkaProducer.send(newGameManager); return new
		 * ResponseEntity<Game>(newGameManager, HttpStatus.OK);
		 */
	}
	
	

	/**
	 * getting few data from recommendation play button when user hit particular
	 * card
	 * 
	 * @param game
	 * @param gameId
	 * @param gameTypeName
	 * @param gameTypeId
	 * @param userId
	 * @return
	 */
	@Timed(value = "quiz.game-manager.acceptDataFromPLayButton", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/games/{gameId}/{gameTypeName}/{gameTypeId}/{userId}/{topicId}", method = RequestMethod.GET)
	public ResponseEntity<?> acceptDataFromPLayButton(@PathVariable(value = "gameId") String gameId,
			@PathVariable(value = "gameTypeName") String gameTypeName,
			@PathVariable(value = "gameTypeId") String gameTypeId, @PathVariable(value = "userId") String userId,
			@PathVariable(value = "topicId") String topicId) {

		System.out.println(" data from play button :game id : " + gameId + " gameTypeId: " + gameTypeId
				+ " gameTypeName " + gameTypeName + " " + userId + "toipcId" + topicId);
		Game acceptGameOnPlayButton = new Game();
		GameType gameType = new GameType();
		Topic topic = new Topic();
		gameType.setGameTypeId(Integer.parseInt(gameTypeId));
		gameType.setGameTypeName(gameTypeName);
		topic.setTopicId(Integer.parseInt(topicId));
		acceptGameOnPlayButton.setGameId(Integer.parseInt(gameId));
		acceptGameOnPlayButton.setGameType(gameType);
		acceptGameOnPlayButton.setUserId(Integer.parseInt(userId));
		acceptGameOnPlayButton.setTopic(topic);
		return new ResponseEntity<>(acceptGameOnPlayButton, HttpStatus.OK);
	}

	
	/**
	 * Recommendation play button sending data for multi player game by GET REST
	 * call
	 * 
	 * @param gameId
	 * @param gameTypeName
	 * @param gameTypeId
	 * @param userId
	 * @param topicId
	 * @return
	 */
	@Timed(value = "quiz.game-manager.acceptMultiDataFromPLayButton", histogram = true, percentiles = {
			0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/games/{gameId}/mp/{gameTypeName}/{gameTypeId}/{userId}/{topicId}", method = RequestMethod.GET)
	public ResponseEntity<?> acceptMultiDataFromPLayButton(@PathVariable(value = "gameId") String gameId,
			@PathVariable(value = "gameTypeName") String gameTypeName,
			@PathVariable(value = "gameTypeId") String gameTypeId, @PathVariable(value = "userId") String userId,
			@PathVariable(value = "topicId") String topicId) {

		System.out.println(" data from play button :game id : " + gameId + " gameTypeId: " + gameTypeId
				+ " gameTypeName " + gameTypeName + " " + userId + "toipcId" + topicId);
		MultiPlayerGame acceptMultiGameOnPlayButton = new MultiPlayerGame();
		GameType gameType = new GameType();
		Topic topic = new Topic();
		// Users user = new Users();
		gameType.setGameTypeId(Integer.parseInt(gameTypeId));
		gameType.setGameTypeName(gameTypeName);
		topic.setTopicId(Integer.parseInt(topicId));
		acceptMultiGameOnPlayButton.setGameId(Integer.parseInt(gameId));
		acceptMultiGameOnPlayButton.setGameType(gameType);
		acceptMultiGameOnPlayButton.setUserId(Integer.parseInt(userId));
		acceptMultiGameOnPlayButton.setTopic(topic);
		return new ResponseEntity<>(acceptMultiGameOnPlayButton, HttpStatus.OK);
	}

	
	
	/**
	 * @param gameId
	 * @param userId
	 * @return
	 */
	@Timed(value = "quiz.game-manager.acceptMultiIdnUserDataFromPLayButton", histogram = true, percentiles = {
			0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/games/mp/{gameId}/{userId}", method = RequestMethod.GET)
	public ResponseEntity<?> acceptMultiIdnUserDataFromPLayButton(@PathVariable(value = "gameId") String gameId,
						 @PathVariable(value = "userId") String userId) {

		System.out.println(" data from play button :game id : " + gameId+ "user id" + userId);
		MultiPlayerGame acceptMultiGameOnPlayButton = new MultiPlayerGame();
		Users user = new Users();
		user.setUserId(userId);
		acceptMultiGameOnPlayButton.setGameId(Integer.parseInt(gameId));
		
		acceptMultiGameOnPlayButton.setUserId(Integer.parseInt(userId));
		
		return new ResponseEntity<>(acceptMultiGameOnPlayButton, HttpStatus.OK);
	}

	/**
	 * generating for search service(by name)
	 * 
	 * @param gameName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findGameByGameName", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/gamesNameStartsWith/{gameName}", method = RequestMethod.GET)
	public ResponseEntity<?> findGameByGameNameStartsWith(@PathVariable(value = "gameName") String gameName) {
		System.out.println(gameName);
		System.out.println(gameManagerService.findByGameNameStartsWith(gameName));
		return new ResponseEntity<>(gameManagerService.findByGameNameStartsWith(gameName), HttpStatus.OK);
	}

	
	
	/**
	 * generating for search service(by name)
	 * 
	 * @param gameName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findGameByGameName", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/games/{gameName}", method = RequestMethod.GET)
	public ResponseEntity<?> findGameByGameName(@PathVariable(value = "gameName") String gameName) {
		System.out.println(gameName);
		System.out.println(gameManagerService.findByGameName(gameName));
		return new ResponseEntity<>(gameManagerService.findByGameName(gameName), HttpStatus.OK);
	}

	
	
	/**
	 * generating this to find game by id
	 * 
	 * @param gameId
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findGameByGameId", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/game1/{gameId}", method = RequestMethod.GET)
	public ResponseEntity<Game> findGameByGameId( 
			@PathVariable(value = "gameId") int gameId) {
			//int id1 = Integer.parseInt(gameId);
		System.out.println(gameManagerService.findByGameId(gameId));
		return new ResponseEntity<Game>(gameManagerService.findByGameId(gameId), HttpStatus.OK);
	}

	
	
	
	/**
	 * @param game
	 * @param gameId
	 * @param gameTypeName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findGameById", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/games/{gameId}/{gameTypeName}", method = RequestMethod.GET)
	public ResponseEntity<?> findGameById(@RequestBody Game game, @PathVariable(value = "gameId") String gameId,
			@PathVariable(value = "gameTypeName") String gameTypeName) {
		int id1 = Integer.parseInt(gameId);
		// System.out.println(id1);

		Game getGameIdNType = new Game();
		return new ResponseEntity<>(gameManagerService.findByGameId(id1), HttpStatus.OK);
	}

	

	/**
	 * @param categoryId
	 * @param topicName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findGameById", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/mp/category/{categoryId}/{topic}", method = RequestMethod.GET)
	public ResponseEntity<?> findGameByTopicName(@PathVariable(value = "categoryId") int categoryId,@PathVariable(value = "topic") String topicName)  {
        
		
		System.out.println("finding game----" + topicName);
		
	    Iterable<Game> gameList = gameManagerService.getAllGameManagers();
	    
	    
	    //Iterable<MultiPlayerGame> multiGameList = gameManagerService.getAllMultiPlayerGame();
//		System.out.println("Games---->>" + gameList);
		//System.out.println("MultiGames------>>>" + multiGameList);
//		ArrayList<Object> list =list.add(gameList);
//		list.add(multiGameList); new ArrayList<>();
		List<Object> list = new ArrayList<>();
		for(Game g : gameList) {
			System.out.println("Topic name" + g.getTopic().getTopicName());
			
			if(topicName.equalsIgnoreCase(g.getTopic().getTopicName())){
				list.add(g);
				System.out.println("games...." + g);
			}
		}
		
//		for(MultiPlayerGame mg : multiGameList) {
//			System.out.println("Entered for MultiPlayerGame");
//			if(topicName.equalsIgnoreCase(mg.getTopic().getTopicName())){
//				list.add(mg);
//				System.out.println("MultiPlayerGame...." + mg);
//			}
//			else {
//				return new ResponseEntity<>(list, HttpStatus.OK);
//			}
//		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);	
	}
	
	
	/**
	 * generating for sending response as game details to play button service get
	 * all game datails
	 * 
	 * @return
	 */
	@Timed(value = "quiz.game-manager.showAllGameManager", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/games", method = RequestMethod.GET)
	public ResponseEntity<?> showAllGameManager() {
		System.out.println(gameManagerService.getAllGameManagers());
		return new ResponseEntity<>(gameManagerService.getAllGameManagers(), HttpStatus.OK);
	}

	
	
	
	
	
	
	/**
	 * generating for sending response as game details to play button service get
	 * all game datails
	 * 
	 * @return
	 */
	@Timed(value = "quiz.game-manager.showAllGameManager", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/games/mp", method = RequestMethod.GET)
	public ResponseEntity<?> showAllMultiGames() {
		System.out.println(gameManagerService.getAllMultiPlayerGame());
		return new ResponseEntity<>(gameManagerService.getAllMultiPlayerGame(), HttpStatus.OK);
	}
	
	
	
	
	
	
	

	@Timed(value = "quiz.game-manager.updateGameById", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/updategame/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Game> updateGameById(@PathVariable(value = "id") String id, @RequestBody Game game) {
		int gameId = Integer.parseInt(id);
		
		Game updateGame = gameManagerService.findByGameId(gameId);
		
		
		gameManagerRepository.save(game);
		return new ResponseEntity<Game>(gameManagerService.updateGameById(gameId, game), HttpStatus.OK);
	}

	
	
	
	@Timed(value = "quiz.game-manager.updateMultiGameById", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/updatempgame/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateMultiGameById(@PathVariable(value = "id") String id, @RequestBody MultiPlayerGame multiPlayerGame) {
		int gameId = Integer.parseInt(id);
         
		return new ResponseEntity<>(gameManagerService.updateMultiPlayerGameById(gameId, multiPlayerGame), HttpStatus.OK);
	}

	
	
	
	@Timed(value = "quiz.game-manager.deleteGameById", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/deletegame/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteGameById(@PathVariable(value = "id") String id, @RequestBody Game game){

		int gameId = Integer.parseInt(id);
	
	    Game g = gameManagerService.findByGameId(gameId);
	   
	    gameManagerRepository.deleteByGameId(g.getGameId());;
		
		kafkaProducer.sendDeleteById(gameId);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	
	
	
	@Timed(value = "quiz.game-manager.deleteMultiGameById", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/deletemultigame/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteMultiGameById(@PathVariable(value = "id") String id, @RequestBody MultiPlayerGame multiGame){
		
		int id1 = Integer.parseInt(id);
		MultiPlayerGame multiGame1 = new MultiPlayerGame();
		multiGame1.setGameId(id1);
		kafkaProducer.sendDeleteById(id1);
		return new ResponseEntity<>(gameManagerService.deleteMultiByGameId(id1, multiGame), HttpStatus.OK); 	
	}
	
	
	
	
	@Timed(value = "quiz.game-manager.saveAllQuestions", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/game", method = RequestMethod.POST)
	public ResponseEntity<?> saveAllQuestions(@RequestBody Game game) {
		return new ResponseEntity<>(gameManagerService.saveQuestions(game), HttpStatus.OK);
	}

	
	
	
	
	
	@Timed(value = "quiz.game-engine.GetQuestionsrequest", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/category", method = RequestMethod.POST)
	public ResponseEntity<?> saveCategory(@RequestBody Category category) {
		return new ResponseEntity<>(gameManagerService.saveCategories(category), HttpStatus.OK);
	}

	
	
	
	
	
	@Timed(value = "quiz.game-engine.GetQuestionsrequest", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}", method = RequestMethod.GET)
	public ResponseEntity<?> showAllGameManager(@PathVariable(value = "categoryId") int categoryId,
			@PathVariable(value = "topicName") String topicName) {
		return new ResponseEntity<>(gameManagerService.getAllGameManagers(), HttpStatus.OK);
	}
	
	
	
	

	/*
	 * Get a particular topic by topic name in a category by category name
	 */
	/**
	 * @param game
	 * @param categoryId
	 * @param topicName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findByTopicNameUnderACategory", histogram = true, percentiles = {
			0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}", method = RequestMethod.POST)
	public ResponseEntity<Game> findByTopicNameUnderACategory(@RequestBody Game game,
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName) {
		System.out.println("Url Hit");
		System.out.println("game.toString===> " + game.toString());
		System.out.println("category id:  " + categoryId);
		System.out.println("topic name:  " + topicName);
		Topic foundTopic = null;
		Random rnd = new Random();

		Game game1 = new Game();
		game1.setGameId(rnd.nextInt(900000) + rnd.nextInt(900000));
		System.out.println("gameid====" + game1.getGameId());
		game1.setGameName(game.getGameName());
		game1.setGameImage(game.getGameImage());
		game1.setCreatedBy(game.getCreatedBy());
		game1.setCreatedOn(game.getCreatedOn());
		
		System.out.println(game.getCreatedOn());
		
		game1.setGameType(game.getGameType());
		game1.setGameDescription(game.getGameDescription());
		game1.setGameRules(game.getGameRules());
		game1.setCategoryId(categoryId);
		
		System.out.println("Categryid" + categoryId);
		
		game1.setUserId(game.getUserId());
		game1.setQuestionLevels(game.getQuestionLevels());
		game1.setQuestionTime(game.getQuestionTime());
		game1.setQuestionScore(game.getQuestionScore());
		
		Optional<Category> foundCategoryById = categoryRepo.findById(categoryId);
		System.out.println(foundCategoryById);
		
		Iterator<Topic> itr = foundCategoryById.get().getTopic().iterator();
		System.out.println("Here" + foundCategoryById.get().getTopic());

		// game1.setGameName(foundTopic.getTopicName() + game.getGameType());

		int easyLevelQuestions = game1.getQuestionLevels().getEasyLevel();
		System.out.println("Data=====>" + easyLevelQuestions);
		int mediumLevelQuestions = game1.getQuestionLevels().getMediumLevel();
		int advanceLevelQuestions = game1.getQuestionLevels().getAdvancedLevel();
		
		int total = 0;
		int e = 1;
		int m = 1;
		int a = 1;

		List<Questions> listQuestions = new ArrayList<>();
		Random rand = new Random();
		int randomNum = rand.nextInt(20) + 1;

		while (itr.hasNext()) {

			Topic topicStr = itr.next();
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				foundTopic = topicStr;
				System.out.println("Here" + foundTopic);
				
				Iterator<Questions> questionStr = foundTopic.getQuestions().iterator();
				
				while (questionStr.hasNext()) {
					Questions foundQuestions = questionStr.next();
					System.out.println("found="+foundQuestions.toString());
					String qType = foundQuestions.getQuestionType();

					if (!qType.equals("auto")) {
						System.out.println("inside manual block===>"+foundQuestions.getQuestionType());
						if (foundQuestions.getQuestionLevel() == 1 && e <= easyLevelQuestions) {
							
							
							listQuestions.add(foundQuestions);
							e++;
							System.out.println(listQuestions);
							System.out.println(e);
							
						}

						if (foundQuestions.getQuestionLevel() == 2 && m <= mediumLevelQuestions) {
							
							listQuestions.add(foundQuestions);
							m++;
							System.out.println(listQuestions);
							System.out.println(m);
							
						}
						if (foundQuestions.getQuestionLevel() == 3 && a <= advanceLevelQuestions) {
							
							listQuestions.add(foundQuestions);
							a++;
							System.out.println(listQuestions);
							System.out.println(a);
							
						}

					}
				}
				// listQuestions.add(questionstr);

			}
		}

		game1.setTopic(foundTopic);
		System.out.println("Full object" + game1);
		game1.setQuestions(listQuestions);
		System.out.println("Full object" + game1.getQuestions().get(0).getCorrectAnswer());
		// gameManagerService.addGameManager(game1);
		// kafkaProducer.sendFilteredQuestions(game1);

		gameManagerService.addGameManager(game1);

		kafkaProducer.send(game1);
		return new ResponseEntity<Game>(game1, HttpStatus.OK);
	}

	
	
	
	
	
	/**
	 * @param multiPlayerGame
	 * @param categoryId
	 * @param topicName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findByTopicNameForMultiGame", histogram = true, percentiles = {
			0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/mp/{categoryId}/{topicName}", method = RequestMethod.POST)

	public ResponseEntity<MultiPlayerGame> findByTopicNameForMultiGame(@RequestBody MultiPlayerGame multiPlayerGame,
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName) {
		Topic foundAutoTopic = null;
		Random rnd = new Random();

		multiPlayerGame.getGameType().setGameTypeId(2);
		MultiPlayerGame multiGame = new MultiPlayerGame();
		System.out.println("Game id" + multiPlayerGame.getGameId());
		multiGame.setGameId(rnd.nextInt(900000) + rnd.nextInt(900000));
		multiGame.setGameName(multiPlayerGame.getGameName());
		multiGame.setGameImage(multiPlayerGame.getGameImage());
		multiGame.setCreatedOn(multiPlayerGame.getCreatedOn());
		multiGame.setCreatedBy(multiPlayerGame.getCreatedBy());
		multiGame.setGameType(multiPlayerGame.getGameType());

		multiGame.setGameDescription(multiPlayerGame.getGameDescription());
		multiGame.setGameRules(multiPlayerGame.getGameRules());
		multiGame.setUserId(multiPlayerGame.getUserId());
		multiGame.setNumberOfQuestions(multiPlayerGame.getNumberOfQuestions());
		multiGame.setQuestionLevel(multiPlayerGame.getQuestionLevel());
		multiGame.setTimePerQuestion(multiPlayerGame.getTimePerQuestion());
		multiGame.setScorePerQuestion(multiPlayerGame.getScorePerQuestion());
		multiGame.setAutoquestions(multiPlayerGame.getAutoquestions());
		multiGame.setCategoryId(categoryId);
		System.out.println("Passed all the setters" + categoryId);

		Optional<Category> foundCategoryById = categoryRepo.findById(categoryId);
		System.out.println("Optional value" + foundCategoryById);
		
		Iterator<Topic> itr = foundCategoryById.get().getTopic().iterator();
		System.out.println(multiGame.getQuestionLevel());
		
		int easyLevelQuestions = multiGame.getQuestionLevel().getEasyLevel();
		System.out.println(("easy questions" + easyLevelQuestions));
		
		List<Questions> listQuestions = new ArrayList<>();

		int e =1;
		
		while (itr.hasNext()) {

			Topic topicStr = itr.next();
			System.out.println("topic=====>" + topicStr);
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				foundAutoTopic = topicStr;
				Iterator<Questions> questionStr = foundAutoTopic.getQuestions().iterator();
				while (questionStr.hasNext()) {
				
					Questions foundQuestions = questionStr.next();
					System.out.println("found questions" + foundQuestions);
					
					String qType = foundQuestions.getQuestionType();
					System.out.println(qType);
					
					if (!qType.equals("manual")) {
						if (foundQuestions.getQuestionLevel() == 1 && e <= easyLevelQuestions) {

							listQuestions.add(foundQuestions);
							e++;
							System.out.println(e);

						}
					}
				}
			}
		}
		multiGame.setTopic(foundAutoTopic);

		multiGame.setAutoquestions(listQuestions);

		gameManagerService.addMultiPlayerGame(multiGame);
		System.out.println(multiGame);
		kafkaProducer.sendMultiGame(multiGame);

		return new ResponseEntity<MultiPlayerGame>(multiGame, HttpStatus.OK);
	}

	
	
	
	
	
	/**
	 * @param gameId
	 * @return
	 */
	@Timed(value = "quiz.game-manager.showAllGameManager", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/games/mp/{gameId}", method = RequestMethod.GET)
	public ResponseEntity<?> showAllMultiGames(@PathVariable(value = "gameId") int gameId) {
		System.out.println(gameManagerService.findMultiGameById(gameId));
		return new ResponseEntity<>(gameManagerService.findMultiGameById(gameId), HttpStatus.OK);
	}

	
	
	
	
	
	@Timed(value = "quiz.game-manager.addMultiGameManager", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/multigame", method = RequestMethod.POST)
	public ResponseEntity<MultiPlayerGame> addMultiGameManager(@RequestBody MultiPlayerGame multiPlayerGame)
			throws Exception {

		// System.out.println(gameManager.getQuestionLevels().getAdvlevel());

		MultiPlayerGame newMultiGameManager = gameManagerService.addMultiPlayerGame(multiPlayerGame);
		kafkaProducer.sendMultiGame(newMultiGameManager);
		return new ResponseEntity<MultiPlayerGame>(newMultiGameManager, HttpStatus.OK);

	}

	
	
	
	
	
	// @RequestMapping(value = "/category/{categoryId}/{topicName}", method =
	// RequestMethod.POST)
	public ResponseEntity<MultiPlayerGame> findByTopicNameUnderACategory(@RequestBody MultiPlayerGame multiGame,
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName) {
		System.out.println("Url Hit");
		return new ResponseEntity<MultiPlayerGame>(multiGame, HttpStatus.OK);
	}

	
	
	
	
	
	/*
	 * Get all questions in a topic by topic name and also with category ID
	 */

	/**
	 * @param categoryId
	 * @param topicName
	 * @return
	 */
	@Timed(value = "quiz.game-manager.findAllQuestionsUnderATopic", histogram = true, percentiles = {
			0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/{questions}", method = RequestMethod.GET)
	public ResponseEntity<List<Questions>> findAllQuestionsUnderATopic(
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName) {
		// Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Optional<Category> foundCategoryByName = categoryRepo.findById(categoryId);
		// Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		Iterator<Topic> itr = foundCategoryByName.get().getTopic().iterator();

		Game gameQuestions = new Game();
		int easyLevelQuestions = gameQuestions.getQuestionLevels().getEasyLevel();
		int mediumLevelQuestions = gameQuestions.getQuestionLevels().getMediumLevel();
		int advanceLevelQuestions = gameQuestions.getQuestionLevels().getAdvancedLevel();

		System.out.println("easyLevelQuestions" + easyLevelQuestions);
		System.out.println("mediumLevelQuestions" + mediumLevelQuestions);
		System.out.println("advanceLevelQuestions" + advanceLevelQuestions);

		List<Questions> listQuestions = new ArrayList<>();
		Random rand = new Random();
		int randomNum = rand.nextInt(50) + 1;

		while (itr.hasNext()) {
			Topic topicStr = itr.next();
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				Iterator<Questions> str = topicStr.getQuestions().iterator();
				while (str.hasNext()) {
					Questions questionstr = str.next();
					if (questionstr.getQuestionLevel() == easyLevelQuestions
							&& questionstr.getQuestionType() == "autoGenQuestions") {
						for (int i = randomNum; i < randomNum + easyLevelQuestions; i++) {
							listQuestions.add(questionstr);
						}
					} else {

						if (questionstr.getQuestionLevel() == easyLevelQuestions) {
							for (int i = randomNum; i < randomNum + easyLevelQuestions; i++) {
								listQuestions.add(questionstr);
								System.out.println(listQuestions);
							}
						}
						if (questionstr.getQuestionLevel() == mediumLevelQuestions) {
							for (int i = randomNum; i < randomNum + mediumLevelQuestions; i++) {
								listQuestions.add(questionstr);
								System.out.println(listQuestions);
							}
						}
						if (questionstr.getQuestionLevel() == advanceLevelQuestions) {
							for (int i = randomNum; i < randomNum + advanceLevelQuestions; i++) {
								listQuestions.add(questionstr);
								System.out.println(listQuestions);
							}
						}

					}
					
				}
				
			}
		}
		gameQuestions.setQuestions(listQuestions);
		gameManagerService.addGameManager(gameQuestions);
		kafkaProducer.sendFilteredQuestions(gameQuestions);
		return new ResponseEntity<List<Questions>>(listQuestions, HttpStatus.OK);
	}
	
	
	/* @RequestMapping(value = "/questiontopic/{questionLevel}", method =RequestMethod.GET)
	  public ResponseEntity<Game> findByTopic(@PathVariable(value = "questionLevel") int questionLevel) { 
		  	Game gameByTopic = GameManagerServiceMONGOImpl.findByTopic(questionLevel);
		  	return new ResponseEntity<Game>(questionByTopic, HttpStatus.OK);
		  	}
	 */

}














 /* @RequestMapping(value = "/questiontopic/{questionLevel}", method =RequestMethod.GET)
  public ResponseEntity<Game> findByTopic(@PathVariable(value = "questionLevel") int questionLevel) { 
	  	Game questionByTopic = GameManagerServiceMONGOImpl.findByTopic(questionLevel);
	  	return new ResponseEntity<Game>(questionByTopic, HttpStatus.OK);
	  	}
 */

/*
 * System.out.println("Hello"+gameManagerService.checkid(gameManager.getGameId()));
 * if(!gameManagerService.checkid(gameManager.getGameId())) { 
 * GameManager newGameManager= gameManagerService.addGameManager(gameManager); return new
 * ResponseEntity<GameManager>(newGameManager,HttpStatus.OK); } else { throw new
 * Exception("game with id "+gameManager.getGameId()+" already exit"); }
 */