package com.stackroute.maverick.domain;

public class GameDetails {
	public int gameId;
	public int gameSessionId;
	public String gameName;
	public String gameTypeName;
	public int getGameId() {
		return gameId;
	}
	public void setGameId(int gameId) {
		this.gameId = gameId;
	}
	public int getGameSessionId() {
		return gameSessionId;
	}
	public void setGameSessionId(int gameSessionId) {
		this.gameSessionId = gameSessionId;
	}
	public String getGameName() {
		return gameName;
	}
	public void setGameName(String gameName) {
		this.gameName = gameName;
	}
	public String getGameTypeName() {
		return gameTypeName;
	}
	public void setGameTypeName(String gameTypeName) {
		this.gameTypeName = gameTypeName;
	}
	public GameDetails()
	{}
	public GameDetails(int gameId, int gameSessionId, String gameName, String gameTypeName) {
		super();
		this.gameId = gameId;
		this.gameSessionId = gameSessionId;
		this.gameName = gameName;
		this.gameTypeName = gameTypeName;
	}
	

}
