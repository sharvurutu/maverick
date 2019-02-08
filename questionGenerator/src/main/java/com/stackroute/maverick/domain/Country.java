package com.stackroute.maverick.domain;

public class Country {
	
	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	public Country() {
		
	}

	public Country(String value) {
		super();
		this.value = value;
	}

	@Override
	public String toString() {
		return "Country [value=" + value + "]";
	}
	
	

}
