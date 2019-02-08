package com.stackroute.maverick.domain;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "game_data")
public class GameData {

	private int gameId;
	private int categoryId;
	private String gameName;
	private String gameImage;
	private int userId;
	private int totalQuestions;
	private int qId;
	private int questionLevel;
	private String question;
	private String options[];
	private String cAns;
	private GameType gameType;
	private GameQuestionLevel qLevels;
	private GameQuestionTime questionTime;
	private GameQuestionScore questionScore;

	public int getGameId() {
		return gameId;
	}

	public void setGameId(int gameId) {
		this.gameId = gameId;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getGameName() {
		return gameName;
	}

	public void setGameName(String gameName) {
		this.gameName = gameName;
	}

	public String getGameImage() {
		return gameImage;
	}

	public void setGameImage(String gameImage) {
		this.gameImage = gameImage;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getqId() {
		return qId;
	}

	public void setqId(int qId) {
		this.qId = qId;
	}

	public int getQuestionLevel() {
		return questionLevel;
	}

	public void setQuestionLevel(int questionLevel) {
		this.questionLevel = questionLevel;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String[] getOptions() {
		return options;
	}

	public void setOptions(String[] options) {
		this.options = options;
	}

	public String getcAns() {
		return cAns;
	}

	public void setcAns(String cAns) {
		this.cAns = cAns;
	}

	public GameType getGameType() {
		return gameType;
	}

	public void setGameType(GameType gameType) {
		this.gameType = gameType;
	}

	public GameQuestionLevel getqLevels() {
		return qLevels;
	}

	public void setqLevels(GameQuestionLevel qLevels) {
		this.qLevels = qLevels;
	}

	public GameQuestionTime getQuestionTime() {
		return questionTime;
	}

	public void setQuestionTime(GameQuestionTime questionTime) {
		this.questionTime = questionTime;
	}

	public GameQuestionScore getQuestionScore() {
		return questionScore;
	}

	public void setQuestionScore(GameQuestionScore questionScore) {
		this.questionScore = questionScore;
	}

	public GameData(int gameId, int categoryId, String gameName, String gameImage, int userId, int totalQuestions,
			int qId, int questionLevel, String question, String[] options, String cAns, GameType gameType,
			GameQuestionLevel qLevels, GameQuestionTime questionTime, GameQuestionScore questionScore) {
		super();
		this.gameId = gameId;
		this.categoryId = categoryId;
		this.gameName = gameName;
		this.gameImage = gameImage;
		this.userId = userId;
		this.setTotalQuestions(totalQuestions);
		this.qId = qId;
		this.questionLevel = questionLevel;
		this.question = question;
		this.options = options;
		this.cAns = cAns;
		this.gameType = gameType;
		this.qLevels = qLevels;
		this.questionTime = questionTime;
		this.questionScore = questionScore;
	}

	public GameData() {
	}

	public int getTotalQuestions() {
		return totalQuestions;
	}

	public void setTotalQuestions(int totalQuestions) {
		this.totalQuestions = totalQuestions;
	}

}
