package com.stackroute.maverick.domain;

import java.util.List;

public class Topic {

	private int topicId;
	private String topicName;
	private String topicImage;
	private List<Questions> questions;

	public int getTopicId() {
		return topicId;
	}

	public void setTopicId(int topicId) {
		this.topicId = topicId;
	}

	public String getTopicName() {
		return topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	public List<Questions> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Questions> questions) {
		this.questions = questions;
	}

	public Topic(int topicId, String topicName, String topicImage, List<Questions> questions) {
		super();
		this.topicId = topicId;
		this.topicName = topicName;
		this.topicImage = topicImage;
		this.questions = questions;
	}

	public Topic() {

	}

	public String getTopicImage() {
		return topicImage;
	}

	public void setTopicImage(String topicImage) {
		this.topicImage = topicImage;
	}
}
