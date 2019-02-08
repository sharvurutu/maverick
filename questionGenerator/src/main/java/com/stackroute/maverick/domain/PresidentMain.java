package com.stackroute.maverick.domain;

public class PresidentMain {

	private PresidentResults results;

	public PresidentResults getResults() {
		return results;
	}

	public void setResults(PresidentResults results) {
		this.results = results;
	}

	public PresidentMain(PresidentResults results) {
		super();
		this.results = results;
	}

	public PresidentMain() {

	}

	@Override
	public String toString() {
		return "PresidentMain [results=" + results + "]";
	}

}
