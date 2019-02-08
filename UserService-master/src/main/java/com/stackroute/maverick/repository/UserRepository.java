package com.stackroute.maverick.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.UserProfile;

@Repository
public interface UserRepository extends CrudRepository<UserProfile, Integer> {

	UserProfile findByEmail(String email);

}