package com.stackroute.maverick.repository;

import org.springframework.data.repository.CrudRepository;


import com.stackroute.maverick.domain.GameSinglePlayerDetails;

public interface SinglePlayerRepository extends CrudRepository<GameSinglePlayerDetails,Integer> {

}
