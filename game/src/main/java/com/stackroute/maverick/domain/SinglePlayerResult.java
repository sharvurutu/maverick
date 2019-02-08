package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "result")
public class SinglePlayerResult {

	private List<PlayedQuestions> playedData;
	private int gameSessionId;
	private int Score;

	public List<PlayedQuestions> getPlayedData() {
		return playedData;
	}

	public void setPlayedData(List<PlayedQuestions> playedData) {
		this.playedData = playedData;
	}

	public SinglePlayerResult(List<PlayedQuestions> playedData, int gameSessionId, int Score) {
		super();
		this.playedData = playedData;
		this.gameSessionId = gameSessionId;
		this.Score = Score;
	}

	public SinglePlayerResult() {
	}

	public int getGameSessionId() {
		return gameSessionId;
	}

	public void setGameSessionId(int gameSessionId) {
		this.gameSessionId = gameSessionId;
	}

	public int getScore() {
		return Score;
	}

	public void setScore(int score) {
		Score = score;
	}

}
