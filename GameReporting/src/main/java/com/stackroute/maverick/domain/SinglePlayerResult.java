package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

//@Document(collection = "result")
public class SinglePlayerResult {

	private int gameSessionId;
	private int Score;
	private List<PlayedQuestions> playedData;
	
	
	public SinglePlayerResult() {

	}

	
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

	public SinglePlayerResult(List<PlayedQuestions> playedData, int gameSessionId,int Score) {
		super();
		this.playedData = playedData;
		this.gameSessionId = gameSessionId;
		this.Score=Score;
	}

	@Override
	public String toString() {
		return "Result [playedData=" + playedData + ", gameSessionId=" + gameSessionId + "]";
	}


	public int getScore() {
		return Score;
	}


	public void setScore(int Score) {
		this.Score = Score;
	}

}
