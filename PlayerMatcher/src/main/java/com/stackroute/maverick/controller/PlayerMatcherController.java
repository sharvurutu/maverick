package com.stackroute.maverick.controller;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.service.AddPlayerService;

/**
 * Kafka Listener Controller class
 * 
 * @author shatayki
 *
 */
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1")
public class PlayerMatcherController {
	/**
	 * Method to avoid bean error. As the domain isn't being stored in the database.
	 *
	 */
	@Bean
	public User user() {
		return new User();
	}

	/**
	 * Autowiring of the domian class
	 *
	 */
	@Autowired
	User user;

	/**
	 * Autowiring of the service class
	 */
	@Autowired
	AddPlayerService addPlayerService;

	/**
	 * 
	 * Method to add a player to a queue.
	 * 
	 * @param gameId
	 * @param userId
	 * @return
	 * @throws InterruptedException
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	@RequestMapping(value = "/matching/{userId}/{gameId}", method = RequestMethod.GET)
	public ResponseEntity<String> addPlayertoFastestFingerQueue(@PathVariable(value = "userId") int userId,
			@PathVariable(value = "gameId") int gameId)
			throws InterruptedException, ClassNotFoundException, IOException {

		System.out.println("Hit" + gameId + userId);

		addPlayerService.addPlayertoQueue(gameId, userId);

		return new ResponseEntity<String>("Matched", HttpStatus.OK);

	}

	public void display() {

	}

}
