package com.stackroute.maverick.domain;

public class Dod {

	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Dod(String value) {
		super();
		this.value = value;
	}

	public Dod() {

	}

	@Override
	public String toString() {
		return "Dod [value=" + value + "]";
	}

}
