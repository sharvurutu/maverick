package com.stackroute.maverick.search.domain;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author prajna
 *
 */
@JsonIgnoreProperties({  "createdBy", "createdOn", "categoryId", "userId", "questionLevels", "questionTime",
		"questionScore", "questions" })
public class Game {
	@JsonProperty("gameId")
	private int gameId;
	@JsonProperty("gameName")
	private String gameName;
	@JsonProperty("gameImage")
	private String gameImage;

	private String createdBy;
	private Date createdOn;
	
	@JsonProperty("gameType")
	private GameType gameType;
	@JsonProperty("gameTypeId")
	private int gameTypeId;
	
	@JsonProperty("gameTypeName")
	private String gameTypeName;
	@JsonProperty("gameTypeDescription")
	private String gameTypeDescription;
	@JsonProperty("gameDescription")
	private String gameDescription;
	@JsonProperty("gameRules")
	private String gameRules;

	private int categoryId;

	private int userId;

	private GameQuestionLevel questionLevels;

	private GameQuestionTime questionTime;

	private GameQuestionScore questionScore;

	@JsonProperty("topic")
	private Topic topic;
	@JsonProperty("topicId")
	private Topic topicId;

	private List<Questions> questions;

	/**
	 * Default Constructor
	 */
	public Game() {

	}

	/**
	 * @return the gameTypeId
	 */
	public int getGameTypeId() {
		return gameTypeId;
	}

	/**
	 * @param gameTypeId the gameTypeId to set
	 */
	public void setGameTypeId(int gameTypeId) {
		this.gameTypeId = gameTypeId;
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

}
