

//This is dummy repository for my dummy model GameReports . Here i do all the experiments to carry out implementation

package com.stackroute.maverick.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.GameReports;

@Repository
public interface GameReportingRepoI extends CrudRepository<GameReports,Integer>
{
	
	public GameReports findBygamename(String gameName);
	
	//Add whatever you want extra methods to be implemented
}
