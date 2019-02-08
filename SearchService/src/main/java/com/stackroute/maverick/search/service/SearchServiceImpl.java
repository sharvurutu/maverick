package com.stackroute.maverick.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.stackroute.maverick.search.domain.Game;

/**
 * @author prajna Search Service class
 */
@Service
public class SearchServiceImpl implements SearchService {

	/**
	 * Autowire RestTemplate
	 */
	@Autowired
	RestTemplate restTemplate;

	/**
	 * @param search
	 *            all games starting with a name
	 * @return array of games starting with the name
	 */
	public Game[] findByNameStartsWith(String name) {
		String url = "http://localhost:9091/api/game/gamesNameStartsWith/" + name;
		Game[] result = restTemplate.getForObject(url, Game[].class);
		
		return result;
	}

	/**
	 * @param search
	 *            for a game
	 * @return matching game name
	 */
	public Game findByName(String name) {
		String url = "http://localhost:9091/api/game/games/" + name;
		Game result = restTemplate.getForObject(url, Game.class);
		return result;

	}
}
