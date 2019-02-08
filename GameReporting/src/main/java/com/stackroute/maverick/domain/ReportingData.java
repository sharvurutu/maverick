package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="multiplayerresult")
public class ReportingData {
	
	@Id
	private int userId;
	//private String userName;
	
	private GameDetails gamedetails;
	public int score;
	private List<ReportQuestions> reportQuestions;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
	public GameDetails getGamedetails() {
		return gamedetails;
	}
	public void setGamedetails(GameDetails gamedetails) {
		this.gamedetails = gamedetails;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public List<ReportQuestions> getReportQuestions() {
		return reportQuestions;
	}
	public void setReportQuestions(List<ReportQuestions> reportQuestions) {
		this.reportQuestions = reportQuestions;
	}
	public ReportingData(int userId, String userName ) {
		super();
		this.userId = userId;
	}
	
	public ReportingData(GameDetails gamedetails, int score, List<ReportQuestions> reportQuestions) {
		super();
		this.gamedetails = gamedetails;
		this.score = score;
		this.reportQuestions = reportQuestions;
	}
	public ReportingData()
	{}
}
