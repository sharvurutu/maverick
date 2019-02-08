package com.stackroute.maverick.search.domain;

import java.util.List;

public class Questions {
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

	/**
	 * @return the questionId
	 */
	public int getQuestionId() {
		return questionId;
	}

	/**
	 * @param questionId
	 *            the questionId to set
	 */
	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	/**
	 * @return the questionLevel
	 */
	public int getQuestionLevel() {
		return questionLevel;
	}

	/**
	 * @param questionLevel
	 *            the questionLevel to set
	 */
	public void setQuestionLevel(int questionLevel) {
		this.questionLevel = questionLevel;
	}

	/**
	 * @return the questionStem
	 */
	public String getQuestionStem() {
		return questionStem;
	}

	/**
	 * @param questionStem
	 *            the questionStem to set
	 */
	public void setQuestionStem(String questionStem) {
		this.questionStem = questionStem;
	}

	/**
	 * @return the questionType
	 */
	public String getQuestionType() {
		return questionType;
	}

	/**
	 * @param questionType
	 *            the questionType to set
	 */
	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}

	/**
	 * @return the option1
	 */
	public String getOption1() {
		return option1;
	}

	/**
	 * @param option1
	 *            the option1 to set
	 */
	public void setOption1(String option1) {
		this.option1 = option1;
	}

	/**
	 * @return the option2
	 */
	public String getOption2() {
		return option2;
	}

	/**
	 * @param option2
	 *            the option2 to set
	 */
	public void setOption2(String option2) {
		this.option2 = option2;
	}

	/**
	 * @return the option3
	 */
	public String getOption3() {
		return option3;
	}

	/**
	 * @param option3
	 *            the option3 to set
	 */
	public void setOption3(String option3) {
		this.option3 = option3;
	}

	/**
	 * @return the option4
	 */
	public String getOption4() {
		return option4;
	}

	/**
	 * @param option4
	 *            the option4 to set
	 */
	public void setOption4(String option4) {
		this.option4 = option4;
	}

	/**
	 * @return the correctAnswer
	 */
	public String getCorrectAnswer() {
		return correctAnswer;
	}

	/**
	 * @param correctAnswer
	 *            the correctAnswer to set
	 */
	public void setCorrectAnswer(String correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	/**
	 * @return the user
	 */
	public List<AdminUser> getUser() {
		return user;
	}

	/**
	 * @param user
	 *            the user to set
	 */
	public void setUser(List<AdminUser> user) {
		this.user = user;
	}

}
