package com.stackroute.maverick.domain;

import java.util.List;

public class LanguageResults {
	
	private List<LanguageBindings> bindings;

	public List<LanguageBindings> getBindings() {
		return bindings;
	}

	public void setBindings(List<LanguageBindings> bindings) {
		this.bindings = bindings;
	}

	public LanguageResults(List<LanguageBindings> bindings) {
		super();
		this.bindings = bindings;
	}
	
	public LanguageResults() {
		
	}

	@Override
	public String toString() {
		return "LanguageResults [getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
	
	

}
