package com.stackroute.maverick.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserActivity")
public class UserActivity {

	@Id
	private int userId;
//	private int userName;
	private GameSessionDetails gameSessionDetails;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

//	public int getUserName() {
//		return userName;
//	}
//
//	public void setUserName(int userName) {
//		this.userName = userName;
//	}

	public GameSessionDetails getGameSessionDetails() {
		return gameSessionDetails;
	}

	public void setGameSessionDetails(GameSessionDetails gameSessionDetails) {
		this.gameSessionDetails = gameSessionDetails;
	}
}
