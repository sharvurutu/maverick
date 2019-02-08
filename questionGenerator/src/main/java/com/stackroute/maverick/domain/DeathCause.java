package com.stackroute.maverick.domain;

public class DeathCause {

	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public DeathCause(String value) {
		super();
		this.value = value;
	}

	public DeathCause() {

	}

	@Override
	public String toString() {
		return "DeathCause [value=" + value + "]";
	}

}
