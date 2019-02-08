package com.stackroute.maverick.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class GameReports {
	/*
	 * private int gameid; private String gameplayed; private List<Questions>
	 * questions;
	 */

	private String gamename;
	private String gametype;
	private String Question;
	private String Correct;

	public GameReports() {
	}

	@Id
	private int gameid;

	public int getGameid() {
		return gameid;
	}

	public void setGameid(int gameid) {
		this.gameid = gameid;
	}

	public GameReports(int gameid, String gamename, String gametype, String question, String correct) {
		super();
		this.gameid = gameid;
		this.gamename = gamename;
		this.gametype = gametype;
		Question = question;
		Correct = correct;
	}

	public String getGamename() {
		return gamename;
	}

	public void setGamename(String gamename) {
		this.gamename = gamename;
	}

	public String getGametype() {
		return gametype;
	}

	public void setGametype(String gametype) {
		this.gametype = gametype;
	}

	public String getQuestion() {
		return Question;
	}

	public void setQuestion(String question) {
		Question = question;
	}

	public String getCorrect() {
		return Correct;
	}

	public void setCorrect(String correct) {
		Correct = correct;
	}

	@Override
	public String toString() {
		return "GameReports [gameid=" + gameid + ", gamename=" + gamename + ", gametype=" + gametype + ", Question="
				+ Question + ", Correct=" + Correct + "]";
	}

}
