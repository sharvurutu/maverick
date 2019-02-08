package com.stackroute.maverick.repository;

import java.util.List;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import com.stackroute.maverick.domain.AdaptiveLevel;


public interface AdaptiveLevelRepository extends Neo4jRepository<AdaptiveLevel, Long> {
    
	//query for adding level 1 node to a topic
	
	@Query("match (n:AdaptiveTopic) where n.topic_id={topic_id} create (m:AdaptiveLevel1)-[r:adaptive_level_of]->(n) return m;")
	List<AdaptiveLevel> addLevel1(@Param("topic_id") int topic_id);
	
	//query for adding level 2 node to a topic
	
	@Query("match (n:AdaptiveTopic) where n.topic_id={topic_id} create (m:AdaptiveLevel2)-[r:adaptive_level_of]->(n) return m;")
	List<AdaptiveLevel> addLevel2(@Param("topic_id") int topic_id);
	
	//query for adding level 3 node to a topic
	
	@Query("match (n:AdaptiveTopic) where n.topic_id={topic_id} create (m:AdaptiveLevel3)-[r:adaptive_level_of]->(n) return m;")
	List<AdaptiveLevel> addLevel3(@Param("topic_id") int topic_id);
}
