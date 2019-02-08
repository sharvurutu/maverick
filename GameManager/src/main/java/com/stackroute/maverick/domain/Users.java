package com.stackroute.maverick.domain;

public class Users {

	public String userId;
	public String userName;
	
	public Users() {
		super();
		
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", userName=" + userName + "]";
	}
	
	
	
	
	
}
