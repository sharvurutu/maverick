package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;

import com.stackroute.maverick.domain.Game;

public interface ActualDataRepo extends CrudRepository<Game, Object> {

}