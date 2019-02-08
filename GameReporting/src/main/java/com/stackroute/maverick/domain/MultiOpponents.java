package com.stackroute.maverick.domain;

public class MultiOpponents {
	
	private int opponentId;
	private String opponentName;
	

	public int getOpponentId() {
		return opponentId;
	}


	public void setOpponentId(int opponentId) {
		this.opponentId = opponentId;
	}


	public String getOpponentName() {
		return opponentName;
	}


	public void setOpponentName(String opponentName) {
		this.opponentName = opponentName;
	}


	public MultiOpponents(int opponentId, String opponentName) {
		super();
		this.opponentId = opponentId;
		this.opponentName = opponentName;
	}


	public MultiOpponents()
	{}
}
