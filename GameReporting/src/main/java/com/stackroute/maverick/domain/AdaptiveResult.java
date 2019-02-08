package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="adaptiveresult")
public class AdaptiveResult {
	
	 private int user_id;
	    
	    private int category_id;
	    
	    private int topic_id;
	    
	    private int game_id;
	    
	    private String game_name;
	    @Id
	    private int game_session_id;
	    
	    

		public AdaptiveResult(int user_id, int category_id, int topic_id, int game_id, int game_session_id,String game_name,
				List<AdaptiveResponseQuestion> response) {
			super();
			this.user_id = user_id;
			this.category_id = category_id;
			this.topic_id = topic_id;
			this.game_id = game_id;
			this.game_session_id = game_session_id;
			this.game_name=game_name;
			this.response = response;
		}

		public AdaptiveResult() {
			// TODO Auto-generated constructor stub
		}

		private List<AdaptiveResponseQuestion> response;

	    public int getUser_id() {
	        return user_id;
	    }

	    public void setUser_id(int user_id) {
	        this.user_id = user_id;
	    }

	    public int getCategory_id() {
	        return category_id;
	    }

	    public void setCategory_id(int category_id) {
	        this.category_id = category_id;
	    }

	    public int getTopic_id() {
	        return topic_id;
	    }

	    public void setTopic_id(int topic_id) {
	        this.topic_id = topic_id;
	    }

	    public int getGame_id() {
	        return game_id;
	    }

	    public void setGame_id(int game_id) {
	        this.game_id = game_id;
	    }

	    public List<AdaptiveResponseQuestion> getResponse() {
	        return response;
	    }

	    public void setResponse(List<AdaptiveResponseQuestion> response) {
	        this.response = response;
	    }

	    @Override
	    public String toString() {
	        return "AdaptiveResult [user_id=" + user_id + ", category_id=" + category_id + ", topic_id=" + topic_id
	                + ", game_id=" + game_id + ", response=" + response + ",game_name=" + game_name +"]";
	    }

		public int getGame_session_id() {
			return game_session_id;
		}

		public void setGame_session_id(int game_session_id) {
			this.game_session_id = game_session_id;
		}

		public String getGame_name() {
			return game_name;
		}

		public void setGame_name(String game_name) {
			this.game_name = game_name;
		}
		
	    

}
