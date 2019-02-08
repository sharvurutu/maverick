package com.stackroute.maverick.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
//Own domain class

@Document(collection = "user_table1")
public class UserProfile {

	@Id
	private int userId;
	private String userName;
	private String password;
	private String email;
	private String age;
	private long mobile;
	private String role;
	private String image;
	private String coverImage;
	private String gender;
	private String location;
	private int level;
	private List<Integer> levelName;
	private String aboutMe;
	private String status;
	private int gameCount;
	private List<GamePlayed> gamePlayed;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCoverImage() {
		return coverImage;
	}

	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public List<Integer> getLevelName() {
		return levelName;
	}

	public void setLevelName(List<Integer> levelName) {
		this.levelName = levelName;
	}

	public String getAboutMe() {
		return aboutMe;
	}

	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getGameCount() {
		return gameCount;
	}

	public void setGameCount(int gameCount) {
		this.gameCount = gameCount;
	}

	public List<GamePlayed> getGamePlayed() {
		return gamePlayed;
	}

	public void setGamePlayed(List<GamePlayed> gamePlayed) {
		this.gamePlayed = gamePlayed;
	}

	public UserProfile() {

	}
	
	

	@Override
	public String toString() {
		return "UserProfile [userId=" + userId + ", userName=" + userName + ", password=" + password + ", email="
				+ email + ", age=" + age + ", mobile=" + mobile + ", role=" + role + ", image=" + image
				+ ", coverImage=" + coverImage + ", gender=" + gender + ", location=" + location + ", level=" + level
				+ ", levelName=" + levelName + ", aboutMe=" + aboutMe + ", status=" + status + ", gameCount="
				+ gameCount + ", gamePlayed=" + gamePlayed + "]";
	}

	public UserProfile(int userId, String userName, String password, String email, String age, long mobile, String role,
			String image, String coverImage, String gender, String location, int level, List<Integer> levelName,
			String aboutMe, String status, int gameCount, List<GamePlayed> gamePlayed) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.age = age;
		this.mobile = mobile;
		this.role = role;
		this.image = image;
		this.coverImage = coverImage;
		this.gender = gender;
		this.location = location;
		this.level = level;
		this.levelName = levelName;
		this.aboutMe = aboutMe;
		this.status = status;
		this.gameCount = gameCount;
		this.gamePlayed = gamePlayed;
	}

}