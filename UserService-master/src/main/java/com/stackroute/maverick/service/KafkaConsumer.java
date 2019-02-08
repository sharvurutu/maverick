package com.stackroute.maverick.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.controller.UserController;
import com.stackroute.maverick.domain.GamePlayed;
import com.stackroute.maverick.domain.MultiPlayerResult;
import com.stackroute.maverick.domain.PlayedQuestions;
import com.stackroute.maverick.domain.SelectedCategoriesModel;
import com.stackroute.maverick.domain.SinglePlayerResult;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.domain.UserProfile;
import com.stackroute.maverick.domain.Users;
import com.stackroute.maverick.repository.UserRepository;

@Service
public class KafkaConsumer {
	private static final Logger log = LoggerFactory.getLogger(KafkaConsumer.class);
	@Autowired
	private UserRepository userRepository;
	@Autowired
	UserProfile userProfile;
	@Autowired
	PlayedQuestions playedData;
	@Autowired
	GamePlayed gamePlayed;
	@Autowired
	Users opponents;
	// @Autowired
	// SelectedCategoriesModel selectedCategoriesModel;
	@Autowired
	UserController controller;

	/**
	 * Data from User Registration
	 * 
	 * @param user
	 */

	 @KafkaListener(topics = "new-user-created.t")
	 public void processEvent(User user) {
	 log.info("received content = '{}'", user.toString());
	 // System.out.println("calling from kafka consumer recommendation");
	 // System.out.println("received content = " + user.toString());
	 if (user.getUserId() != 0) {
	 userProfile.setUserId(user.getUserId());
	 }
	 if (user.getUserName() != null) {
	 userProfile.setUserName(user.getUserName());
	 }
	 if (user.getPassword() != null) {
	 userProfile.setPassword(user.getPassword());
	 }
	 if (user.getLocation() != null) {
	 userProfile.setLocation(user.getLocation());
	 }
	 if (user.getEmail() != null) {
	 userProfile.setEmail(user.getEmail());
	 }
	 if (user.getMobile() != 0) {
	 userProfile.setMobile(user.getMobile());
	 }
	 if (user.getRole() != null) {
	 userProfile.setRole(user.getRole());
	 }
	 if (user.getGender() != null) {
	 userProfile.setGender(user.getGender());
	 }
	 if (user.getPassword() != null) {
	 userProfile.setAge(user.getAge());
	 }
	 controller.addUser(userProfile);
	 // userRepository.save(userProfile);
	 log.info("Saved data from user login '{}'", userProfile.toString());
	 }
	
	 /**
	 * Data from User Login
	 *
	 * @param user
	 */
	 @KafkaListener(topics = "userId-login.t")
	 public void processEventSinglePlayer(User user) {
	 String email = user.getEmail();
	 if (userProfile.getEmail().equals(email)) {
	 controller.findUserbyEmail(email);
	 }
	 log.info("received content = '{}'", user.toString());
	 }

	/**
	 * Data from User Login
	 * 
	 * @param user
	 */

	@KafkaListener(topics = "selected_categories.t")
	public void processEventLikedCategoeies(SelectedCategoriesModel selectedCategoriesModel) {
		List<Integer> catlist = new ArrayList<>();
		log.info("---------------------------received content = '{}'--------------------", selectedCategoriesModel);
		System.out.println("selected categories id---->"+selectedCategoriesModel.getSelectedCategoryId()+" user id  "+selectedCategoriesModel.getUserId());
		
		//userProfile.getLevelName().add(selectedCategoriesModel.getSelectedCategoryId());
		catlist.add(selectedCategoriesModel.getSelectedCategoryId());
		System.out.println("catlist---->"+catlist);
		userProfile.setLevelName(catlist);
		//userProfile.setUserId(selectedCategoriesModel.getUserId());
		userRepository.save(userProfile);
		if (selectedCategoriesModel != null) {
		}
	}
	/**
	 * Data from Single Player assessment
	 * 
	 * @param user
	 */
	 @SuppressWarnings("unchecked")
	 @KafkaListener(topics = "single-player-result.t")
	 public void processEventSinglePlayer(SinglePlayerResult user) {
	 List<GamePlayed> list = new ArrayList<>();
	 gamePlayed.setGameId((user.getGameSessionId()));
	 list.add(gamePlayed);
	 userProfile.setGamePlayed(list);
	 @SuppressWarnings("rawtypes")
	 List playedData = user.getPlayedData();
	 userProfile.setGamePlayed(playedData);
	 userRepository.save(userProfile);
	 log.info("received content = '{}'", user.toString());
	 }
	
	 /**
	 * Data from MultiPlayer assessment
	 *
	 * @param user
	 */
	
	 @KafkaListener(topics = "multi-player-result.t")
	 public void processEventMultiPlayer(MultiPlayerResult user) {
	 List<GamePlayed> list = new ArrayList<>();
	 gamePlayed.setGameId(user.getGameId());
	 gamePlayed.setGameName(user.getGameName());
	 gamePlayed.setOpponent(user.getUsers());
	 list.add(gamePlayed);
	 userProfile.setGamePlayed(list);
	 userRepository.save(userProfile);
	 log.info("received content = '{}'", user.toString());
	 }
	
	/**
	 * Data from User login
	 * 
	 * @param user
	 */

}