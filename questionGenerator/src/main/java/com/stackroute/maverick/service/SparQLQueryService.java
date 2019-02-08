package com.stackroute.maverick.service;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.stackroute.maverick.domain.LanguageResults;
import com.stackroute.maverick.domain.Main;
import com.stackroute.maverick.domain.PresidentMain;

public interface SparQLQueryService {
	
	public Main capitals(Main main) throws JsonParseException, JsonMappingException, IOException;
	
	public PresidentMain Presidents(PresidentMain presidentMain) throws JsonParseException, JsonMappingException, IOException;

	public LanguageResults cricketers(LanguageResults langResults) throws JsonParseException, JsonMappingException, IOException;
}
