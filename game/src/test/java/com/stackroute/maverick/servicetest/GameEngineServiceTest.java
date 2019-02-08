package com.stackroute.maverick.servicetest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.maverick.domain.Game;
import com.stackroute.maverick.repositories.ActualDataRepo;
import com.stackroute.maverick.services.GameEngineServiceImpl;

@RunWith(SpringRunner.class)
public class GameEngineServiceTest {

	@MockBean
	ActualDataRepo actualDataRepo;

	@InjectMocks
	GameEngineServiceImpl gameEngineServiceImpl;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testGetAllQuestions() {
		Game game = new Game(1, 2, 3, "ImageUrl", "pravin", "dwu", null, null, "add", "ad", null, null, null, null,
				null);
		Game game1 = new Game(3, 2, 1, "ImageUrl", "pravin", "dwu", null, null, "add", "ad", null, null, null, null,
				null);
		ArrayList<Game> list = new ArrayList<Game>();
		list.add(game);
		list.add(game1);
		Iterable<Game> itr = list;
		System.out.println(itr);

		Mockito.when(actualDataRepo.findAll()).thenReturn(itr);
		Iterable<Game> result = gameEngineServiceImpl.getAllQuestions();
		assertEquals(result, itr);

	}

	@Test
	public void testStoreQuestion() {
		Game game = new Game(1, 2, 3, "ImageUrl", "pravin", "dwu", null, null, "add", "ad", null, null, null, null,
				null);

		Mockito.when(actualDataRepo.save(game)).thenReturn(game);

		Game result = gameEngineServiceImpl.storeQuestion(game);
		assertNotNull(result);
	}

}
