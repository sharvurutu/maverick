package com.stackroute.maverick.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import com.stackroute.maverick.domain.AdaptiveCategory;

public interface AdaptiveCategoryRepository extends Neo4jRepository<AdaptiveCategory, Long>{
	
	//query for creating a new node of category in database
  
	@Query("create (n:AdaptiveCategory)-[r:adaptive_category_of]->(m) set n.category_id={category_id},n.timeStamp={time} return n;")
	List<AdaptiveCategory> addCategory(@Param("category_id") int category_id,@Param("time") String time);
	
	//query for checking whether a category node exist or not 
	
	@Query("match (n:AdaptiveCategory) where n.category_id={category_id} return n;")
	List<AdaptiveCategory> checkCategoryId(@Param("category_id") int category_id);
}
