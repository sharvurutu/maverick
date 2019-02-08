package com.stackroute.maverick.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.kafka.Sender;

@Configuration
public class KafkaSenderConfig {

	/*
	 * bootstraping the kafka server
	 */
	@Value("${kafka.bootstrap-servers}")
	private String bootstrapServers;

	/*
	 * kafka consumer configs for serializing or deserializing the data sent through
	 * the topic
	 */
	@Bean
	public Map<String, Object> producerConfigs() {
		Map<String, Object> props = new HashMap<>();
		props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
		props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
		props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);

		return props;
	}

	/*
	 * produces a sender instance of kafka receiver
	 */
	@Bean
	public ProducerFactory<String, Category> producerFactory() {
		return new DefaultKafkaProducerFactory<>(producerConfigs());
	}

	/*
	 * implements a concurrent listener for listening to multiple topics
	 */
	@Bean
	public KafkaTemplate<String, Category> kafkaTemplate() {
		return new KafkaTemplate<>(producerFactory());
	}
	
	/*
	 * produces a sender instance of kafka receiver
	 */
	@Bean
	public ProducerFactory<String, CategoriesModel> producerFactory1() {
		return new DefaultKafkaProducerFactory<>(producerConfigs());
	}

	/*
	 * implements a concurrent listener for listening to multiple topics
	 */
	@Bean
	public KafkaTemplate<String, CategoriesModel> kafkaTemplate1() {
		return new KafkaTemplate<>(producerFactory1());
	}
	
	@Bean
	public ProducerFactory<String, Integer> producerFactory2() {
		return new DefaultKafkaProducerFactory<>(producerConfigs());
	}

	/*
	 * implements a concurrent listener for listening to multiple topics
	 */
	@Bean
	public KafkaTemplate<String, Integer> kafkaTemplate2() {
		return new KafkaTemplate<>(producerFactory2());
	}


	/*
	 * sender constructor
	 */
	@Bean
	public Sender sender() {
		return new Sender();
	}
}
