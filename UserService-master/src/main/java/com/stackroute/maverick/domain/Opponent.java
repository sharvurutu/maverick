package com.stackroute.maverick.domain;

public class Opponent {

	private int id;
	private String name;
	private int score;
	private int rank;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public Opponent() {

	}

	public Opponent(int id, String name, int score, int rank) {
		super();
		this.id = id;
		this.name = name;
		this.score = score;
		this.rank = rank;
	}

	@Override
	public String toString() {
		return "Opponent [id=" + id + ", name=" + name + ", score=" + score + ", rank=" + rank + "]";
	}

}