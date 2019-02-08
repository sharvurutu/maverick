package com.stackroute.maverick.domain;

public class President {

	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public President(String value) {
		super();
		this.value = value;
	}

	public President() {

	}

	@Override
	public String toString() {
		return "President [value=" + value + "]";
	}

}
