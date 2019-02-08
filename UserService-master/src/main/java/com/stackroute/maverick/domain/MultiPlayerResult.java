package com.stackroute.maverick.domain;

import java.util.List;

public class MultiPlayerResult {

	private int gameId;
	private String gameName;
	List<Users> users;

	public int getGameId() {
		return gameId;
	}

	public void setGameId(int gameId) {
		this.gameId = gameId;
	}

	public String getGameName() {
		return gameName;
	}

	public void setGameName(String gameName) {
		this.gameName = gameName;
	}

	public List<Users> getUsers() {
		return users;
	}

	public void setUsers(List<Users> users) {
		this.users = users;
	}

	public MultiPlayerResult() {

	}

	public MultiPlayerResult(int gameId, String gameName, List<Users> users) {
		super();
		this.gameId = gameId;
		this.gameName = gameName;
		this.users = users;
	}

	@Override
	public String toString() {
		return "MultiPlayerResult [gameId=" + gameId + ", gameName=" + gameName + ", users=" + users + "]";
	}

}
