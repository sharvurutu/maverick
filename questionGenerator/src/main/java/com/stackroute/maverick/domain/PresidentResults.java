package com.stackroute.maverick.domain;

import java.util.List;

public class PresidentResults {

	private List<PresidentBindings> bindings;

	public List<PresidentBindings> getBindings() {
		return bindings;
	}

	public void setBindings(List<PresidentBindings> bindings) {
		this.bindings = bindings;
	}

	public PresidentResults(List<PresidentBindings> bindings) {
		super();
		this.bindings = bindings;
	}

	public PresidentResults() {

	}

	@Override
	public String toString() {
		return "PresidentResults [bindings=" + bindings + "]";
	}

}
