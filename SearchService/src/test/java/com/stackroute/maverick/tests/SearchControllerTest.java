
package com.stackroute.maverick.tests;

import static org.junit.Assert.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.method;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;

import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestTemplate;

import com.stackroute.maverick.search.controller.SearchController;
import com.stackroute.maverick.search.domain.Game;

import com.stackroute.maverick.search.service.SearchServiceImpl;

/**
 * @author prajna
 *Controller unit test cases
 */
@RunWith(MockitoJUnitRunner.class)
public class SearchControllerTest {

	@InjectMocks
	private SearchController controller;

	@MockBean
	private SearchServiceImpl service;


	private RestTemplate restTemplate = new RestTemplate();
	MockRestServiceServer  mockServer = MockRestServiceServer.createServer(restTemplate);


	@Test
	public void testSearchByName() throws Exception {

				mockServer
				.expect(requestTo("http://localhost:9091/api/game/gamesNameStartsWith/G"))
				.andExpect(method(HttpMethod.GET))
				.andRespond(withSuccess());
				
				//mockServer.verify();
	}

	@Test
	public void testSearchStartsWith() throws Exception {

		//mockServer = MockRestServiceServer.bindTo(restTemplate).build();
				mockServer
				.expect(requestTo("http://localhost:9091/api/game/games/GEO"))
				.andExpect(method(HttpMethod.GET))
				.andRespond(withSuccess());

	}
}
