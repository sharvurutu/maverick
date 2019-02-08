package com.stackroute.maverick.Services;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.GameReports;

@Service
public class KafkaProducerService {
	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducerService.class);
	@Autowired
	private KafkaTemplate<String, Object> kafkaTemplate ;
	
	
	public void send(GameReports gg)
	{
	LOGGER.info("sending payload = '{}' to topic = '{}'",gg);	
		
	kafkaTemplate.send("topic.t", gg);
	
	
	}

}
