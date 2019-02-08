package com.stackroute.maverick;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.stackroute.maverick.config.JWTFilter;



@SpringBootApplication

public class QuizzAppApplication {
	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JWTFilter(null));
		registrationBean.addUrlPatterns("/api/*");

		return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(QuizzAppApplication.class, args);
		
	}
}
