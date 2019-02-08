package com.stackroute.maverick.domain;

public class ReportQuestions {
	 private int questionId;
	    private String questionName;
	    private String correctAnswer;
	    private String selectedAnswer;
		public int getQuestionId() {
			return questionId;
		}
		public void setQuestionId(int questionId) {
			this.questionId = questionId;
		}
		public String getQuestionName() {
			return questionName;
		}
		public void setQuestionName(String questionName) {
			this.questionName = questionName;
		}
		public String getCorrectAnswer() {
			return correctAnswer;
		}
		public void setCorrectAnswer(String correctAnswer) {
			this.correctAnswer = correctAnswer;
		}
		public String getSelectedAnswer() {
			return selectedAnswer;
		}
		public void setSelectedAnswer(String selectedAnswer) {
			this.selectedAnswer = selectedAnswer;
		}
		@Override
		public String toString() {
			return "ReportQuestions [questionId=" + questionId + ", questionName=" + questionName + ", correctAnswer="
					+ correctAnswer + ", selectedAnswer=" + selectedAnswer + "]";
		}
	    

}
