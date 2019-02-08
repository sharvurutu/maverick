package com.stackroute.maverick.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.KafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import com.stackroute.maverick.domain.GamePlayed;
import com.stackroute.maverick.domain.PlayedQuestions;
import com.stackroute.maverick.domain.UserProfile;
import com.stackroute.maverick.domain.Users;
import com.stackroute.maverick.service.KafkaConsumer;

@EnableKafka
@Configuration
public class KafkaConsumerConfig {

	@Value("${kafka.bootstrap-servers}")
	private String bootstrapServer;

	@Bean
	public Map<String, Object> consumerConfigs() {
		Map<String, Object> props = new HashMap<>();

		/*
		 * list of host:port pairs used for establishing the initial connections to the
		 * Kafka cluster
		 */
		props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
		props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
		props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

		/*
		 * allows a pool of processes to divide the work of consuming and processing
		 * records
		 */

		props.put(ConsumerConfig.GROUP_ID_CONFIG, "jsa-group");

		/*
		 * automatically reset the offset to the earliest offset
		 */
		props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

		/*
		 * deserializing the value
		 */
		props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

		/*
		 * adding all classes to deserialization
		 */
		props.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
		// DefaultKafkaConsumerFactory<String, String> consumerFactory =
		// new DefaultKafkaConsumerFactory<String, String>(props,
		// new StringDeserializer(), new StringDeserializer());

		return props;
	}

	@Bean
	public ConsumerFactory<String, Object> consumerFactory() {
		return new DefaultKafkaConsumerFactory<>(consumerConfigs());
	}

	@Bean
	public KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, Object>> kafkaListenerContainerFactory() {
		ConcurrentKafkaListenerContainerFactory<String, Object> factory = new ConcurrentKafkaListenerContainerFactory<>();
		factory.setConsumerFactory(consumerFactory());

		return factory;
	}

	@Bean
	public KafkaConsumer receiver() {
		return new KafkaConsumer();
	}
	
	 @Bean
	 public UserProfile userProfile()
	 {
		 return new UserProfile();
	 }
	 
	 @Bean
	 public PlayedQuestions playedData() {
		 return new PlayedQuestions();
	 }
	 
	 @Bean
	 public GamePlayed gamePlayed() {
		 return new GamePlayed();
	 }
	 
	 @Bean
	 public Users opponents() {
		 return new Users();
	 }


}