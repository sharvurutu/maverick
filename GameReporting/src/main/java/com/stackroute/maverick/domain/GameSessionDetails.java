package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.annotation.Id;

public class GameSessionDetails {

	@Id
	private int gameSessionId;
	//private List<SessionActivity> sessionActivity;
	private SessionActivity sessionActivity;

	public GameSessionDetails(int gameSessionId, SessionActivity sessionActivity) {
		super();
		this.gameSessionId = gameSessionId;
		this.sessionActivity = sessionActivity;
	}
	
	public GameSessionDetails() {
		
	}

	public int getGameSessionId() {
		return gameSessionId;
	}

	public void setGameSessionId(int gameSessionId) {
		this.gameSessionId = gameSessionId;
	}

	public SessionActivity getSessionActivity() {
		return sessionActivity;
	}

	public void setSessionActivity(SessionActivity sessionActivity) {
		this.sessionActivity = sessionActivity;
	}

	/*public List<SessionActivity> getSessionActivity() {
		return sessionActivity;
	}

	public void setSessionActivity(List<SessionActivity> sessionActivity) {
		this.sessionActivity = sessionActivity;
	}*/

}
