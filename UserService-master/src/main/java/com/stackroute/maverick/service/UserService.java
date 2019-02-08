package com.stackroute.maverick.service;

import com.stackroute.maverick.domain.UserProfile;

public interface UserService {
	public UserProfile addUser(UserProfile user);

	public UserProfile updateUserData(UserProfile user);

	public UserProfile deleteUser(UserProfile user);

	public UserProfile getUser(int userId);

	public Iterable<UserProfile> getAllUser();

	public UserProfile getByEmail(String email);
}