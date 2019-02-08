package com.stackroute.maverick.domain;

public class Users {

	private int userId;
	private int userScore;
	private String status;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getUserScore() {
		return userScore;
	}

	public void setUserScore(int userScore) {
		this.userScore = userScore;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Users() {

	}

	public Users(int userId, int userScore, String status) {
		super();
		this.userId = userId;
		this.userScore = userScore;
		this.status = status;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", userScore=" + userScore + ", status=" + status + "]";
	}

}
