package com.stackroute.maverick.domain;

import java.util.List;

public class SinglePlayerResult {

	private int gameSessionId;
	private List<PlayedQuestions> playedData;

	public List<PlayedQuestions> getPlayedData() {
		return playedData;
	}

	public void setPlayedData(List<PlayedQuestions> playedData) {
		this.playedData = playedData;
	}

	public int getGameSessionId() {
		return gameSessionId;
	}

	public void setGameSessionId(int gameSessionId) {
		this.gameSessionId = gameSessionId;
	}

	public SinglePlayerResult() {

	}

	public SinglePlayerResult(List<PlayedQuestions> playedData, int gameSessionId) {
		super();
		this.playedData = playedData;
		this.gameSessionId = gameSessionId;
	}

	@Override
	public String toString() {
		return "SinglePlayerResult [playedData=" + playedData + ", gameSessionId=" + gameSessionId + "]";
	}

}
