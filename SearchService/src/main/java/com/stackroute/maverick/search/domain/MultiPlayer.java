package com.stackroute.maverick.search.domain;

import java.sql.Date;
import java.util.List;

public class MultiPlayer {

	private int gameId;
	private String gameName;
	private String gameImage;
	private String createdBy;
	private Date createdOn;
	private GameType gameType;
	private String gameDescription;
	private String gameRules;
	// private List<Users> users;
	private int userId;
	private int categoryId;
	private int numberOfQuestions;
	private GameQuestionLevel questionLevel;
	private int timePerQuestion;
	private int scorePerQuestion;

	private Topic topic;
	private List<Questions> autoquestions;

	/**
	 * @return the gameId
	 */
	public int getGameId() {
		return gameId;
	}

	/**
	 * @param gameId
	 *            the gameId to set
	 */
	public void setGameId(int gameId) {
		this.gameId = gameId;
	}

	/**
	 * @return the gameName
	 */
	public String getGameName() {
		return gameName;
	}

	/**
	 * @param gameName
	 *            the gameName to set
	 */
	public void setGameName(String gameName) {
		this.gameName = gameName;
	}

	/**
	 * @return the gameImage
	 */
	public String getGameImage() {
		return gameImage;
	}

	/**
	 * @param gameImage
	 *            the gameImage to set
	 */
	public void setGameImage(String gameImage) {
		this.gameImage = gameImage;
	}

	/**
	 * @return the createdBy
	 */
	public String getCreatedBy() {
		return createdBy;
	}

	/**
	 * @param createdBy
	 *            the createdBy to set
	 */
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	/**
	 * @return the createdOn
	 */
	public Date getCreatedOn() {
		return createdOn;
	}

	/**
	 * @param createdOn
	 *            the createdOn to set
	 */
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	/**
	 * @return the gameType
	 */
	public GameType getGameType() {
		return gameType;
	}

	/**
	 * @param gameType
	 *            the gameType to set
	 */
	public void setGameType(GameType gameType) {
		this.gameType = gameType;
	}

	/**
	 * @return the gameDescription
	 */
	public String getGameDescription() {
		return gameDescription;
	}

	/**
	 * @param gameDescription
	 *            the gameDescription to set
	 */
	public void setGameDescription(String gameDescription) {
		this.gameDescription = gameDescription;
	}

	/**
	 * @return the gameRules
	 */
	public String getGameRules() {
		return gameRules;
	}

	/**
	 * @param gameRules
	 *            the gameRules to set
	 */
	public void setGameRules(String gameRules) {
		this.gameRules = gameRules;
	}

	/**
	 * @return the userId
	 */
	public int getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            the userId to set
	 */
	public void setUserId(int userId) {
		this.userId = userId;
	}

	/**
	 * @return the categoryId
	 */
	public int getCategoryId() {
		return categoryId;
	}

	/**
	 * @param categoryId
	 *            the categoryId to set
	 */
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	/**
	 * @return the numberOfQuestions
	 */
	public int getNumberOfQuestions() {
		return numberOfQuestions;
	}

	/**
	 * @param numberOfQuestions
	 *            the numberOfQuestions to set
	 */
	public void setNumberOfQuestions(int numberOfQuestions) {
		this.numberOfQuestions = numberOfQuestions;
	}

	/**
	 * @return the questionLevel
	 */
	public GameQuestionLevel getQuestionLevel() {
		return questionLevel;
	}

	/**
	 * @param questionLevel
	 *            the questionLevel to set
	 */
	public void setQuestionLevel(GameQuestionLevel questionLevel) {
		this.questionLevel = questionLevel;
	}

	/**
	 * @return the timePerQuestion
	 */
	public int getTimePerQuestion() {
		return timePerQuestion;
	}

	/**
	 * @param timePerQuestion
	 *            the timePerQuestion to set
	 */
	public void setTimePerQuestion(int timePerQuestion) {
		this.timePerQuestion = timePerQuestion;
	}

	/**
	 * @return the scorePerQuestion
	 */
	public int getScorePerQuestion() {
		return scorePerQuestion;
	}

	/**
	 * @param scorePerQuestion
	 *            the scorePerQuestion to set
	 */
	public void setScorePerQuestion(int scorePerQuestion) {
		this.scorePerQuestion = scorePerQuestion;
	}

	/**
	 * @return the topic
	 */
	public Topic getTopic() {
		return topic;
	}

	/**
	 * @param topic
	 *            the topic to set
	 */
	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	/**
	 * @return the autoquestions
	 */
	public List<Questions> getAutoquestions() {
		return autoquestions;
	}

	/**
	 * @param autoquestions
	 *            the autoquestions to set
	 */
	public void setAutoquestions(List<Questions> autoquestions) {
		this.autoquestions = autoquestions;
	}
}
