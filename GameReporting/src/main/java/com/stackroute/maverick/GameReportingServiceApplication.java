package com.stackroute.maverick;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

//@EnableDiscoveryClient
@SpringBootApplication
public class GameReportingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameReportingServiceApplication.class, args);
	}
}
