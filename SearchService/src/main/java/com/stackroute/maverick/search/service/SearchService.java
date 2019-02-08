package com.stackroute.maverick.search.service;

import com.stackroute.maverick.search.domain.Game;


/**
 * @author prajna
 * Search Service Interface
 *
 */
public interface SearchService {

	/**
	 * find all games that starts with a value
	 */
	public Game[] findByNameStartsWith(String name);

	/**
	 * find a game by name
	 */
	public Game findByName(String name);

}
