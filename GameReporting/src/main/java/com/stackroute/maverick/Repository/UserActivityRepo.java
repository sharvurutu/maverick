package com.stackroute.maverick.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.SinglePlayerResult;
import com.stackroute.maverick.domain.UserActivity;

@Repository
public interface UserActivityRepo extends CrudRepository<UserActivity,Integer>
{

}
