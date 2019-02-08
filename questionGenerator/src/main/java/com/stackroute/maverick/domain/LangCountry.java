package com.stackroute.maverick.domain;

public class LangCountry {
	
	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public LangCountry(String value) {
		super();
		this.value = value;
	}

	public LangCountry() {
		
	}

	@Override
	public String toString() {
		return "LangCountry [value=" + value + "]";
	}
	
	
	
}
