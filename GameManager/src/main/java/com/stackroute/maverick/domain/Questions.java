package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "questions")
public class Questions {

	@Id
	private int questionId;
	private int questionLevel;
	private String questionStem;
	private String questionType;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String correctAnswer;
	private List<AdminUser> user;

	public Questions() {
		super();
		
	}

	public Questions(int questionId, int questionLevel, String questionStem, String questionType, String option1,
			String option2, String option3, String option4, String correctAnswer, List<AdminUser> user) {
		super();
		this.questionId = questionId;
		this.questionLevel = questionLevel;
		this.questionStem = questionStem;
		this.questionType = questionType;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.correctAnswer = correctAnswer;
		this.user = user;
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public int getQuestionLevel() {
		return questionLevel;
	}

	public void setQuestionLevel(int questionLevel) {
		this.questionLevel = questionLevel;
	}

	public String getQuestionStem() {
		return questionStem;
	}

	public void setQuestionStem(String questionStem) {
		this.questionStem = questionStem;
	}

	public String getQuestionType() {
		return questionType;
	}

	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(String correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	public List<AdminUser> getUser() {
		return user;
	}

	public void setUser(List<AdminUser> user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Questions [questionId=" + questionId + ", questionLevel=" + questionLevel + ", questionStem="
				+ questionStem + ", questionType=" + questionType + ", option1=" + option1 + ", option2=" + option2
				+ ", option3=" + option3 + ", option4=" + option4 + ", correctAnswer=" + correctAnswer + ", user="
				+ user + "]";
	}

	

}
