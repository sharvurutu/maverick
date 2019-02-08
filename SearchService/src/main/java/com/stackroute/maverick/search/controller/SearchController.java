package com.stackroute.maverick.search.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.stackroute.maverick.search.domain.Game;
import com.stackroute.maverick.search.service.SearchService;

/**
 * @author prajna Search controller class
 *
 */
@CrossOrigin("*")
@RequestMapping("maverick")
@Controller
public class SearchController {

	/*
	 * Autowiring Search Service
	 */
	@Autowired
	SearchService service;

	/**
	 * @param search
	 *            all games starting with a name
	 * @return array of games starting with the name
	 */
	@RequestMapping(value = "/search/{name}", method = RequestMethod.GET)
	public ResponseEntity<Game[]> findRestaurantByNameStartswWith(@PathVariable(value = "name") String name) {
		return new ResponseEntity<Game[]>(service.findByNameStartsWith(name), HttpStatus.OK);
	}

	/**
	 * @param search
	 *            for a game
	 * @return matching game name
	 */
	@RequestMapping(value = "/searchresult/{name}", method = RequestMethod.GET)
	public ResponseEntity<Game> findRestaurantByName(@PathVariable(value = "name") String name) {
		Game game1 = service.findByName(name);
		return new ResponseEntity<Game>(game1, HttpStatus.OK);
	}

}
