package com.stackroute.maverick.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "gametype")
public class GameType {

	@Id
	private int gameTypeId;
	private String gameTypeName;
	private String gameTypeDescription;
	/*private String singlePlayerTimeBasedGame;
	private String multiPlayerFastestFingerFirst;
	private String singlePlayerAdaptiveGame;
	*/
	public GameType() {
		super();
		
	}
	public GameType(int gameTypeId, String gameTypeName, String gameTypeDescription) {
		super();
		this.gameTypeId = gameTypeId;
		this.gameTypeName = gameTypeName;
		this.gameTypeDescription = gameTypeDescription;
	}
	public int getGameTypeId() {
		return gameTypeId;
	}
	public void setGameTypeId(int gameTypeId) {
		this.gameTypeId = gameTypeId;
	}
	public String getGameTypeName() {
		return gameTypeName;
	}
	public void setGameTypeName(String gameTypeName) {
		this.gameTypeName = gameTypeName;
	}
	public String getGameTypeDescription() {
		return gameTypeDescription;
	}
	public void setGameTypeDescription(String gameTypeDescription) {
		this.gameTypeDescription = gameTypeDescription;
	}
	@Override
	public String toString() {
		return "GameType [gameTypeId=" + gameTypeId + ", gameTypeName=" + gameTypeName + ", gameTypeDescription="
				+ gameTypeDescription + "]";
	}

	
	
}
