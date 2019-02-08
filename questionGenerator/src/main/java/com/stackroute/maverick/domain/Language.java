package com.stackroute.maverick.domain;

public class Language {

	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Language(String value) {
		super();
		this.value = value;
	}

	public Language() {

	}

	@Override
	public String toString() {
		return "Language [value=" + value + "]";
	}

}
