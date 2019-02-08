package com.stackroute.maverick.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;


import com.stackroute.maverick.domain.AdaptiveQuestion;

public interface AdaptiveQuestionRepository extends Neo4jRepository<AdaptiveQuestion, Long>{
	
	//query for adding question in level 1
	
	@Query("match (o:AdaptiveLevel1)-[r1:adaptive_level_of]->(n:AdaptiveTopic)-[r:adaptive_topic_of]->(m:AdaptiveCategory) where m.category_id={category_id} and n.topic_id={topic_id} create (p:AdaptiveQuestion)-[r3:adaptive_question_of]->(o) set p.questionId={questionId},p.questionStem={questionStem},p.timeStamp={time} return p;")
	List<AdaptiveQuestion> addQuestionInLevel1(@Param("category_id") int category_id,@Param("topic_id") int topic_id,@Param("questionId") int questionId,@Param("questionStem") String questionStem,@Param("time") String time);
	
	//query for adding question in level 2
	
	@Query("match (o:AdaptiveLevel2)-[r1:adaptive_level_of]->(n:AdaptiveTopic)-[r:adaptive_topic_of]->(m:AdaptiveCategory) where m.category_id={category_id} and n.topic_id={topic_id} create (p:AdaptiveQuestion)-[r3:adaptive_question_of]->(o) set p.questionId={questionId},p.questionStem={questionStem},p.timeStamp={time} return p;")
	List<AdaptiveQuestion> addQuestionInLevel2(@Param("category_id") int category_id,@Param("topic_id") int topic_id,@Param("questionId") int questionId,@Param("questionStem") String questionStem,@Param("time") String time);
	
	//query for adding question in level 3
	
	@Query("match (o:AdaptiveLevel3)-[r1:adaptive_level_of]->(n:AdaptiveTopic)-[r:adaptive_topic_of]->(m:AdaptiveCategory) where m.category_id={category_id} and n.topic_id={topic_id} create (p:AdaptiveQuestion)-[r3:adaptive_question_of]->(o) set p.questionId={questionId},p.questionStem={questionStem},p.timeStamp={time} return p;")
	List<AdaptiveQuestion> addQuestionInLevel3(@Param("category_id") int category_id,@Param("topic_id") int topic_id,@Param("questionId") int questionId,@Param("questionStem") String questionStem,@Param("time") String time);
	
	//query for checking whether a question node exist or not in level 1
	
	@Query("match (n:AdaptiveQuestion)-[r1:adaptive_question_of]->(u:AdaptiveLevel1)-[r:adaptive_level_of]->(m:AdaptiveTopic) where n.questionId={questionId} and m.topic_id={topic_id} return n;")
	List<AdaptiveQuestion> checkQuestionIdForLevel1(@Param("topic_id") int topic_id,@Param("questionId") int questionId);
    
	//query for checking whether a question node exist or not in level 2
	
	@Query("match (n:AdaptiveQuestion)-[r1:adaptive_question_of]->(u:AdaptiveLevel2)-[r:adaptive_level_of]->(m:AdaptiveTopic) where n.questionId={questionId} and m.topic_id={topic_id} return n;")
	List<AdaptiveQuestion> checkQuestionIdForLevel2(@Param("topic_id") int topic_id,@Param("questionId") int questionId);

	//query for checking whether a question node exist or not in level 3
	
	@Query("match (n:AdaptiveQuestion)-[r1:adaptive_question_of]->(u:AdaptiveLevel3)-[r:adaptive_level_of]->(m:AdaptiveTopic) where n.questionId={questionId} and m.topic_id={topic_id} return n;")
	List<AdaptiveQuestion> checkQuestionIdForLevel3(@Param("topic_id") int topic_id,@Param("questionId") int questionId);
	
	//query for getting the all question in level 1
	
	@Query("match (n:AdaptiveQuestion)-[r1:adaptive_question_of]->(u:AdaptiveLevel1)-[r:adaptive_level_of]->(m:AdaptiveTopic)-[r2:adaptive_topic_of]->(o:AdaptiveCategory) where o.category_id={category_id} and m.topic_id={topic_id} return n;")
	List<AdaptiveQuestion> listOfQuestionInLevel1(@Param("category_id") int category_id,@Param("topic_id") int topic_id);

	//query for getting the all question in level 2
	
	@Query("match (n:AdaptiveQuestion)-[r1:adaptive_question_of]->(u:AdaptiveLevel2)-[r:adaptive_level_of]->(m:AdaptiveTopic)-[r2:adaptive_topic_of]->(o:AdaptiveCategory) where o.category_id={category_id} and m.topic_id={topic_id} return n;")
	List<AdaptiveQuestion> listOfQuestionInLevel2(@Param("category_id") int category_id,@Param("topic_id") int topic_id);
	
	//query for getting the all question in level 3
	
	@Query("match (n:AdaptiveQuestion)-[r1:adaptive_question_of]->(u:AdaptiveLevel3)-[r:adaptive_level_of]->(m:AdaptiveTopic)-[r2:adaptive_topic_of]->(o:AdaptiveCategory) where o.category_id={category_id} and m.topic_id={topic_id} return n;")
	List<AdaptiveQuestion> listOfQuestionInLevel3(@Param("category_id") int category_id,@Param("topic_id") int topic_id);
	
	//query for getting the question attempted by user in level 1
	
	@Query("match (n:AdaptiveUser)-[r1:adaptive_user_answered]->(n2:AdaptiveOption)-[r2:adaptive_option_of]->(n3:AdaptiveQuestion)-[r3:adaptive_question_of]->(n4:AdaptiveLevel1)-[r4:adaptive_level_of]->(n1:AdaptiveTopic)-[rr:adaptive_topic_of]->(oo:AdaptiveCategory) where n.user_id={user_id} and n1.topic_id={topic_id} and oo.category_id={category_id} return n3;")
	List<AdaptiveQuestion> questionsAnsweredByUserInLevel1(@Param("user_id") int user_id,@Param("topic_id") int topic_id,@Param("category_id") int category_id);
	
	//query for getting the question attempted by user in level 2
	
	@Query("match (n:AdaptiveUser)-[r1:adaptive_user_answered]->(n2:AdaptiveOption)-[r2:adaptive_option_of]->(n3:AdaptiveQuestion)-[r3:adaptive_question_of]->(n4:AdaptiveLevel2)-[r4:adaptive_level_of]->(n1:AdaptiveTopic)-[rr:adaptive_topic_of]->(oo:AdaptiveCategory) where n.user_id={user_id} and n1.topic_id={topic_id} and oo.category_id={category_id} return n3;")
	List<AdaptiveQuestion> questionsAnsweredByUserInLevel2(@Param("user_id") int user_id,@Param("topic_id") int topic_id,@Param("category_id") int category_id);
	
	//query for getting the question attempted by user in level 3
	
	@Query("match (n:AdaptiveUser)-[r1:adaptive_user_answered]->(n2:AdaptiveOption)-[r2:adaptive_option_of]->(n3:AdaptiveQuestion)-[r3:adaptive_question_of]->(n4:AdaptiveLevel3)-[r4:adaptive_level_of]->(n1:AdaptiveTopic)-[rr:adaptive_topic_of]->(oo:AdaptiveCategory) where n.user_id={user_id} and n1.topic_id={topic_id} and oo.category_id={category_id} return n3;")
	List<AdaptiveQuestion> questionsAnsweredByUserInLevel3(@Param("user_id") int user_id,@Param("topic_id") int topic_id,@Param("category_id") int category_id);
}
