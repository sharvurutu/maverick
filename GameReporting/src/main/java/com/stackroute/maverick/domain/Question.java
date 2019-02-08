package com.stackroute.maverick.domain;

public class Question {

	private String question;
	private String options[];
	private String correctAnswer;
	private String selectedAnswer;

	public String[] getOptions() {
		return options;
	}

	public void setOptions(String[] options) {
		this.options = options;
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
	
	public Question(String question,String[] options, String correctAnswer, String selectedAnswer) {
		super();
		this.question=question;
		this.options = options;
		this.correctAnswer = correctAnswer;
		this.selectedAnswer = selectedAnswer;
	}
	
	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Question() {
		
	}

}
