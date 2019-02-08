package com.stackroute.maverick.domain;

public class PresidentBindings {

	private President president;
	private DeathCause cause;
	private Dob dob;
	private Dod dod;

	public President getPresident() {
		return president;
	}

	public void setPresident(President president) {
		this.president = president;
	}

	public DeathCause getCause() {
		return cause;
	}

	public void setCause(DeathCause cause) {
		this.cause = cause;
	}

	public Dob getDob() {
		return dob;
	}

	public void setDob(Dob dob) {
		this.dob = dob;
	}

	public Dod getDod() {
		return dod;
	}

	public void setDod(Dod dod) {
		this.dod = dod;
	}

	public PresidentBindings(President president, DeathCause cause, Dob dob, Dod dod) {
		super();
		this.president = president;
		this.cause = cause;
		this.dob = dob;
		this.dod = dod;
	}

	public PresidentBindings() {

	}

	@Override
	public String toString() {
		return "PresidentBindings [president=" + president + ", cause=" + cause + ", dob=" + dob + ", dod=" + dod + "]";
	}

}
