package com.stackroute.maverick.service;

//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.UserProfile;
import com.stackroute.maverick.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	UserRepository repo;

	@Autowired
	public UserServiceImpl(UserRepository repo1) {
		super();
		this.repo = repo1;
	}

	@Override
	public UserProfile addUser(UserProfile user) {
		System.out.println("from service------------------" + user.getEmail());
		repo.save(user);
		System.out.println("Save done");
		return repo.save(user);
	}

	@Override
	public UserProfile updateUserData(UserProfile user) {
		UserProfile userUpdate = repo.save(user);
		return userUpdate;
	}

	@Override
	public UserProfile deleteUser(UserProfile user) {
		repo.deleteById(user.getUserId());
		return user;
	}

	@Override
	public UserProfile getUser(int userId) {
		return repo.findById(userId).orElse(null);

	}

	@Override
	public Iterable<UserProfile> getAllUser() {
		return repo.findAll();
	}

	@Override
	public UserProfile getByEmail(String email) {
		return repo.findByEmail(email);
	}

}