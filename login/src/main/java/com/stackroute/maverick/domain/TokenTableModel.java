package com.stackroute.maverick.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "token_table")
public class TokenTableModel {
	@Id
private int userId;
private String token;


public int getUserId() {
	return userId;
}
public void setUserId(int userId) {
	this.userId = userId;
}
public String getToken() {
	return token;
}
public void setToken(String token) {
	this.token = token;
}
@Override
public String toString() {
	return "TokenTableModel [userId=" + userId + ", token=" + token + "]";
}


}
