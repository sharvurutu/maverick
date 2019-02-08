package com.stackroute.maverick.domain;

import java.sql.Time;
import java.util.List;

public class GamePlayed {

	private int gameId;
	private String gameName;
	private String gameImage;
	private String gameStatus;
	private Time timeStamp;
	private int rank;
	private String statistics;
	private List<Users> opponent;

	public String getGameImage() {
		return gameImage;
	}

	public void setGameImage(String gameImage) {
		this.gameImage = gameImage;
	}

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

	public Time getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Time timeStamp) {
		this.timeStamp = timeStamp;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public String getGameStatus() {
		return gameStatus;
	}

	public void setGameStatus(String gameStatus) {
		this.gameStatus = gameStatus;
	}

	public String getStatistics() {
		return statistics;
	}

	public void setStatistics(String statistics) {
		this.statistics = statistics;
	}

	public List<Users> getOpponent() {
		return opponent;
	}

	public void setOpponent(List<Users> opponent) {
		this.opponent = opponent;
	}

	public GamePlayed() {

	}

	public GamePlayed(int gameId, String gameName, String gameStatus, Time timeStamp, int rank, String statistics,
			List<Users> opponent) {
		super();
		this.gameId = gameId;
		this.gameName = gameName;
		this.gameStatus = gameStatus;
		this.timeStamp = timeStamp;
		this.rank = rank;
		this.statistics = statistics;
		this.opponent = opponent;
	}

	@Override
	public String toString() {
		return "GamePlayed [gameId=" + gameId + ", gameName=" + gameName + ", gameStatus=" + gameStatus + ", timeStamp="
				+ timeStamp + ", rank=" + rank + ", statistics=" + statistics + ", opponent=" + opponent + "]";
	}

}
