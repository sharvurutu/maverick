package com.stackroute.maverick.kafkaservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.domain.MultiPlayerGame;

@Service
public class KafkaProducer {

	@Value("gameManager.t")
	String kafkaTopic;
	
	@Value("filteredQuestions.t")
	String kafkaTopic1;

	@Value("created-new-multiplayer-game.t")
	String kafkaMultiTopic;
	
	@Value("deleted-game-by-id.t")
	String kafkaDeleteTopic;
	
	
	/*
	 * @Value("GameDetails.t") String kafkaTopic1;
	 */
	@Autowired
	private KafkaTemplate<String, Object> kafkaTemplate;

	
	public void send(Game gameManager) {
		System.out.println("game card posted");
		kafkaTemplate.send("created-new-game.t", gameManager);
	}

	
	public void send1(Game game) {
		System.out.println("game details sent");
		kafkaTemplate.send(kafkaTopic, game);
	}
	
	
	public void sendFilteredQuestions(Game game) {
		System.out.println("game details sent");
		kafkaTemplate.send(kafkaTopic1, game);
	}

	
	/**
	 * @param multiGame
	 */
	public void sendMultiGame(MultiPlayerGame multiGame) {
		System.out.println("Multi game details sent");
		kafkaTemplate.send(kafkaMultiTopic, multiGame);
		
	}

	public void sendDeleteById(int gameid) {
		kafkaTemplate.send(kafkaDeleteTopic, gameid);
	}
	
	
}
