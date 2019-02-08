package com.stackroute.maverick.kafkaservices;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.repository.CategoryRepository;
import com.stackroute.maverick.repository.GameManagerRepository;

@Service
public class KafkaConsumer {

	@Autowired
	GameManagerRepository gameManagerRepository;

	@Autowired
	CategoryRepository categoryRepo;

	@Autowired
	KafkaProducer kafkaProducer;
	
//	@KafkaListener(topics = "gameManager.t")
//	public void processMessage(Game gameManager) {
//
//		System.out.println("received content = " + gameManager);
//	}

	// String consumer
	// @KafkaListener(topics="helloworld1.t")
	// public void processMessage1(String gameManager) {
	//
	// System.out.println("received content = " + gameManager);
	// }
	
	
	
	@KafkaListener(topics = "QuestionGen.t")
	public void processMessageQuestion(Category category) throws NullPointerException {
		//Category cat = new Category();
		//Game game = new Game();

		categoryRepo.save(category);
		// List<Question>= categoryRepo.findById(1);

//		KafkaProducer kafkaConsumer = new KafkaProducer();
//
//		kafkaConsumer.send1(category);

		// cat.setTopic((List<Topic>) category);
		System.out.println("received content = " + category);
	}
	
	
	
	@KafkaListener(topics = "GameEng.t")
	public void game(int[] game1) throws NullPointerException {
		Game game = new Game();
		game.setGameId(game1[0]);
		Game foundById = gameManagerRepository.findByGameId(game.getGameId());
		foundById.setUserId(game1[1]);
		kafkaProducer.send1(foundById);
	}
	
	

}
