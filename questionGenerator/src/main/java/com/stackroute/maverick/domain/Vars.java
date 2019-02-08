package com.stackroute.maverick.domain;

public class Vars {
	private String country;
	private String capital;

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCapital() {
		return capital;
	}

	public void setCapital(String capital) {
		this.capital = capital;
	}

	public Vars(String country, String capital) {
		super();
		this.country = country;
		this.capital = capital;
	}

	public Vars() {

	}

	@Override
	public String toString() {
		return "Vars [country=" + country + ", capital=" + capital + "]";
	}

}
