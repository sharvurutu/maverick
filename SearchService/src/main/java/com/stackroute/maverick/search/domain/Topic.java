package com.stackroute.maverick.search.domain;

import java.util.List;

public class Topic {

	private int topicId;

	/**
	 * @return the topicId
	 */
	public int getTopicId() {
		return topicId;
	}

	/**
	 * @param topicId
	 *            the topicId to set
	 */
	public void setTopicId(int topicId) {
		this.topicId = topicId;
	}

	/**
	 * @return the topicName
	 */
	public String getTopicName() {
		return topicName;
	}

	/**
	 * @param topicName
	 *            the topicName to set
	 */
	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	/**
	 * @return the topicImage
	 */
	public String getTopicImage() {
		return topicImage;
	}

	/**
	 * @param topicImage
	 *            the topicImage to set
	 */
	public void setTopicImage(String topicImage) {
		this.topicImage = topicImage;
	}

	/**
	 * @return the questions
	 */
	public List<Questions> getQuestions() {
		return questions;
	}

	/**
	 * @param questions
	 *            the questions to set
	 */
	public void setQuestions(List<Questions> questions) {
		this.questions = questions;
	}

	private String topicName;
	private String topicImage;
	private List<Questions> questions;

}
