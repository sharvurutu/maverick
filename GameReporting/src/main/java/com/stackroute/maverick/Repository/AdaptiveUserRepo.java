package com.stackroute.maverick.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.AdaptiveResult;

@Repository
public interface AdaptiveUserRepo extends CrudRepository<AdaptiveResult,Integer>
{
	
}
