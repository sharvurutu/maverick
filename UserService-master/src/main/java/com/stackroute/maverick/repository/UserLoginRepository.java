package com.stackroute.maverick.repository;

import org.springframework.data.repository.CrudRepository;

import com.stackroute.maverick.domain.UserProfile;

public interface UserLoginRepository extends CrudRepository<UserProfile, Integer> {

}