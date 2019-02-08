package com.stackroute.maverick.kafka;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;

import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.Category;

public class Sender {

	
	private String questionGeneratorTopic = "QuestionGen.t";
	
	private String categoriesTopic = "Categories.t";

	private String randomTopic = "id.t";
	
	/*
	 * the KafkaTemplate wraps a producer and provides convenience methods to send
	 * data to kafka topics
	 */
	@Autowired
	private KafkaTemplate<String, Category> kafkaTemplate;
	
	@Autowired
	private KafkaTemplate<String, CategoriesModel> kafkaTemplate1;
	
	@Autowired
	private KafkaTemplate<String, Integer> kafkaTemplate2;
	

	/*
	 * sends the data to a particular topic
	 */
	public void send(Category obj) {
		kafkaTemplate.send(questionGeneratorTopic, obj);
	}
	
	public void sendCategory(CategoriesModel obj) {
		kafkaTemplate1.send(categoriesTopic, obj);
	}
	
	public void sendId() {
		Random rand = new Random();
		int n = rand.nextInt(30)+1;
		kafkaTemplate2.send(randomTopic,n);
		
	}
	
	public void sendGameId() {
		Random rand = new Random();
		int i = rand.nextInt(3)+1;
		kafkaTemplate2.send("gameId.t",i);
		
	}

}


