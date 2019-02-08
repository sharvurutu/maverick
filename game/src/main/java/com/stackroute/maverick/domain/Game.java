
package com.stackroute.maverick.domain;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "game")
public class Game {

	@Id
	private int gameId;
	private int categoryId;
	private int userId;
	private String gameName;
	private String gameImage;
	private String createdBy;
	private Date createdOn = new Date();
	private GameType gameType;
	private String gameDescription;
	private String gameRules;
	private GameQuestionLevel questionLevels;
	private GameQuestionTime questionTime;
	private GameQuestionScore questionScore;
	private Topic topic;
	private List<Questions> questions;

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

	public String getGameImage() {
		return gameImage;
	}

	public void setGameImage(String gameImage) {
		this.gameImage = gameImage;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public GameType getGameType() {
		return gameType;
	}

	public void setGameType(GameType gameType) {
		this.gameType = gameType;
	}

	public String getGameDescription() {
		return gameDescription;
	}

	public void setGameDescription(String gameDescription) {
		this.gameDescription = gameDescription;
	}

	public String getGameRules() {
		return gameRules;
	}

	public void setGameRules(String gameRules) {
		this.gameRules = gameRules;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public GameQuestionLevel getQuestionLevels() {
		return questionLevels;
	}

	public void setQuestionLevels(GameQuestionLevel questionLevels) {
		this.questionLevels = questionLevels;
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

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public List<Questions> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Questions> questions) {
		this.questions = questions;
	}

	public Game(int gameId, int categoryId, int userId, String gameName, String gameImage, String createdBy,
			Date createdOn, GameType gameType, String gameDescription, String gameRules,
			GameQuestionLevel questionLevels, GameQuestionTime questionTime, GameQuestionScore questionScore,
			Topic topic, List<Questions> questions) {
		super();
		this.gameId = gameId;
		this.categoryId = categoryId;
		this.userId = userId;
		this.gameName = gameName;
		this.gameImage = gameImage;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
		this.gameType = gameType;
		this.gameDescription = gameDescription;
		this.gameRules = gameRules;
		this.questionLevels = questionLevels;
		this.questionTime = questionTime;
		this.questionScore = questionScore;
		this.topic = topic;
		this.questions = questions;
	}

	public Game() {
	}

}