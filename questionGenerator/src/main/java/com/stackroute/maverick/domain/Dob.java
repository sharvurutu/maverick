package com.stackroute.maverick.domain;

public class Dob {

	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Dob(String value) {
		super();
		this.value = value;
	}

	public Dob() {

	}

	@Override
	public String toString() {
		return "Dob [value=" + value + "]";
	}

}
