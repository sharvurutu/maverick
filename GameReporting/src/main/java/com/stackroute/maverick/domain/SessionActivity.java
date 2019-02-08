package com.stackroute.maverick.domain;

import java.util.List;

public class SessionActivity {

	private int gameId;
	private String gameName;
	private String gameTypeName;
//	private String question;
//	private String options[];
//	private String correctAnswer;
//	private String selectedAnswer;
	//private List<Question> question;
	private List<Question> question;

	public List<Question> getQuestion() {
		return question;
	}

	public void setQuestion(List<Question> question) {
		this.question = question;
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

	public String getGameTypeName() {
		return gameTypeName;
	}

	public void setGameTypeName(String gameTypeName) {
		this.gameTypeName = gameTypeName;
	}

	public SessionActivity(int gameId, String gameName, String gameTypeName, List<Question> question) {
		super();
		this.gameId = gameId;
		this.gameName = gameName;
		this.gameTypeName = gameTypeName;
		this.question = question;
	}
	
	public SessionActivity() {
		;
	}


	
	/*public List<Question> getQuestion() {
		return question;
	}

	public void setQuestion(List<Question> question) {
		this.question = question;
	}*/

	

}
