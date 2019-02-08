package com.stackroute.maverick.domain;

import java.util.List;


public class ReportingData {

	 private int userId;
	    private GameDetails gameDetails;
	    private int score;
	    private List<ReportQuestions> reportQuestions;
		public int getUserId() {
			return userId;
		}
		public void setUserId(int userId) {
			this.userId = userId;
		}
		public GameDetails getGameDetails() {
			return gameDetails;
		}
		public void setGameDetails(GameDetails gameDetails) {
			this.gameDetails = gameDetails;
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
		@Override
		public String toString() {
			return "ReportingData [userId=" + userId + ", gameDetails=" + gameDetails + ", score=" + score
					+ ", reportQuestions=" + reportQuestions + "]";
		}
	    
}
