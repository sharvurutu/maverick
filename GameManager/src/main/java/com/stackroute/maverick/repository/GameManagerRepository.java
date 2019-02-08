package com.stackroute.maverick.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.Game;

/*crud repository to store crud operation data for single player game */
@Repository
public interface GameManagerRepository extends CrudRepository<Game,Integer>  {
	
	public Game findByGameId(int gameId);
	public Game[] findByGameNameStartsWithIgnoreCase(String gameName);
	public Game findByGameName(String gameName);
	public void deleteByGameId(int gameId);
	public List<Game> findByTopic(String gameTopics);
	
	
}
/*docker commands:->
 * docker images -a
 * docker rmi <image/id> -f
 * docker rebuild
 * run <image> -p 8090:8080 -P --name <name>
 * docker inspect <container>
 * docker attach <container-name>
 * docker -itd <>
 * docker stop <>
 * docker restart <>
 * docker-compose up --build/buid/run/stop/remove/down
 * docker container -ls
 * */



//@Query
//public Game findQuestionByTopic(int questionLevel);
//public Game findAllById(int id, Game game);
		
	
	
/*@Query 
 * public Restaurant findByNameAndByLocation(String name, String location);*/
	