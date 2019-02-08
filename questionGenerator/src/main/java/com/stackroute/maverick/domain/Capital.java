package com.stackroute.maverick.domain;

public class Capital {

	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Capital(String value) {
		super();
		this.value = value;
	}

	public Capital() {

	}

	@Override
	public String toString() {
		return "Capital [value=" + value + "]";
	}

}
