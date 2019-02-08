package com.stackroute.maverick.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;

import com.stackroute.maverick.domain.SinglePlayerResult;

public class Sender {

	@Value("GameEng.t")
	private String gameEngTopic;

	@Value("Results3.t")
	private String result;

	/*
	 * the KafkaTemplate wraps a producer and provides convenience methods to send
	 * data to kafka topics
	 */
	@Autowired
	private KafkaTemplate<String, Object> kafkaTemplate;

	/*
	 * sends the data to a particular topic
	 */
	public void send(int[] obj) {
		kafkaTemplate.send(gameEngTopic, obj);
	}

	public void results(SinglePlayerResult obj) {
		kafkaTemplate.send(result, obj);
	}

}
