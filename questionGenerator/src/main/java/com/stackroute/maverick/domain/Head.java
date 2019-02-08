package com.stackroute.maverick.domain;

import java.util.Arrays;

public class Head {

	private String[] vars;

	public String[] getVars() {
		return vars;
	}

	public void setVars(String[] vars) {
		this.vars = vars;
	}

	public Head(String[] vars) {
		super();
		this.vars = vars;
	}

	public Head() {

	}

	@Override
	public String toString() {
		return "Head [vars=" + Arrays.toString(vars) + "]";
	}

}
