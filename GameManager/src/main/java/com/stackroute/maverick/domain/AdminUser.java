package com.stackroute.maverick.domain;

public class AdminUser {

	private int userId;
	private String userName;
	
	
	
	public AdminUser() {
		super();
		
	}
	public AdminUser(int userId, String userName) {
		super();
		this.userId = userId;
		this.userName = userName;
	}
	
	
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
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
		return "User [userId=" + userId + ", userName=" + userName + "]";
	}
	
	
}
