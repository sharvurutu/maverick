package com.stackroute.maverick.domain;

import java.io.File;
import java.util.Date;
import java.util.List;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/*Model class for Single Player Game*/

/**
 * @author sushmita
 *
 */
@Document(collection = "game")
public class Game {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int gameId;
	private String gameName;
	private String gameImage;
	private String createdBy;
	private Date createdOn = new Date();
	private GameType gameType;
	private String gameDescription;
	private String gameRules;
	private int categoryId;
	private int userId;
	private GameQuestionLevel questionLevels;
	private GameQuestionTime questionTime;
	private GameQuestionScore questionScore;
	private Topic topic;
	private List<Questions> questions;

	/**
	 * Default Constructor
	 */
	public Game() {
	}

	/**Parameterized Constructor
	 * 
	 * @param gameId
	 * @param gameName
	 * @param gameImage
	 * @param createdBy
	 * @param createdOn
	 * @param gameType
	 * @param gameDescription
	 * @param gameRules
	 * @param categoryId
	 * @param userId
	 * @param questionLevels
	 * @param questionTime
	 * @param questionScore
	 * @param topic
	 * @param questions
	 */
	public Game(int gameId, String gameName, String gameImage, String createdBy, Date createdOn, GameType gameType,
			String gameDescription, String gameRules, int categoryId, int userId, GameQuestionLevel questionLevels,
			GameQuestionTime questionTime, GameQuestionScore questionScore, Topic topic, List<Questions> questions) {
		super();
		this.gameId = gameId;
		this.gameName = gameName;
		this.gameImage = gameImage;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
		this.gameType = gameType;
		this.gameDescription = gameDescription;
		this.gameRules = gameRules;
		this.categoryId = categoryId;
		this.userId = userId;
		this.questionLevels = questionLevels;
		this.questionTime = questionTime;
		this.questionScore = questionScore;
		this.topic = topic;
		this.questions = questions;
	}

	
	/**
	 * Getters & Setters
	 */
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

	
	/* toString() method
	 * (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Game [gameId=" + gameId + ", gameName=" + gameName + ", gameImage=" + gameImage + ", createdBy="
				+ createdBy + ", createdOn=" + createdOn + ", gameType=" + gameType + ", gameDescription="
				+ gameDescription + ", gameRules=" + gameRules + ", categoryId=" + categoryId + ", userId=" + userId
				+ ", questionLevels=" + questionLevels + ", questionTime=" + questionTime + ", questionScore="
				+ questionScore + ", topic=" + topic + ", questions=" + questions + "]";
	}

	
	
	
	

	
}
