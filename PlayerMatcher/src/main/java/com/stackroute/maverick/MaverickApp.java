package com.stackroute.maverick;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class MaverickApp {

	public static void main(String[] args) {
		SpringApplication.run(MaverickApp.class, args);
		greetings();
	}

	public static void greetings() {
		
		System.out.println("Hi welcome to the maverick application");
	}
	
}
