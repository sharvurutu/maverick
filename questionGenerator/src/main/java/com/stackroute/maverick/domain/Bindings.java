package com.stackroute.maverick.domain;

public class Bindings {

	private Country country;
	private Capital capital;

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	public Capital getCapital() {
		return capital;
	}

	public void setCapital(Capital capital) {
		this.capital = capital;
	}

	public Bindings(Country country, Capital capital) {
		super();
		this.country = country;
		this.capital = capital;
	}

	public Bindings() {

	}

}
