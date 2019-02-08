package com.stackroute.maverick;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


/**
 * @author sushmita
 *
 */


@EnableDiscoveryClient
@SpringBootApplication
public class GameManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameManagerApplication.class, args);
	}
	
	
}













//import org.apache.kafka.clients.producer.KafkaProducer;
//import com.stackroute.gameManager.domain.GameManager;

/*KafkaProducer producer;

public void run(String... arg0) throws Exception{
	GameManager gameManager = new GameManager("1","IPL"); //,"Indian Premier League",4580,22
	producer.send(gameManager);
}*/