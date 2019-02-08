package com.stackroute.maverick.domain;

public class LanguageBindings {

	private LangCountry itemLabel_en;
	private Language official_language;

	public LangCountry getItemLabel_en() {
		return itemLabel_en;
	}

	public void setItemLabel_en(LangCountry itemLabel_en) {
		this.itemLabel_en = itemLabel_en;
	}

	public Language getOfficial_language() {
		return official_language;
	}

	public void setOfficial_language(Language official_language) {
		this.official_language = official_language;
	}

	public LanguageBindings(LangCountry itemLabel_en, Language official_language) {
		super();
		this.itemLabel_en = itemLabel_en;
		this.official_language = official_language;
	}

	public LanguageBindings() {

	}

	@Override
	public String toString() {
		return "LanguageBindings [itemLabel_en=" + itemLabel_en + ", official_language=" + official_language + "]";
	}

}
