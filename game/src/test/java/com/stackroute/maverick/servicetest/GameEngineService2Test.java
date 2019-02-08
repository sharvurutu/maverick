package com.stackroute.maverick.servicetest;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.maverick.domain.GameData;
import com.stackroute.maverick.repositories.GameDataRepo;
import com.stackroute.maverick.services.GameEngineService2Impl;

@RunWith(SpringRunner.class)
public class GameEngineService2Test {

	@MockBean
	GameDataRepo gameDataRepo;
	
	

	@InjectMocks
	GameEngineService2Impl gameEngineService2Impl;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testGetAllQuestions() {
		GameData gd = new GameData(1, 2, "Sqwe", "gfu", 3, 2, 4, 7, "ew", null, "yu", null, null, null, null);
		GameData gd1 = new GameData(3, 2, "Sqwe", "gfu", 3, 2, 4, 7, "ew", null, "yu", null, null, null, null);

		ArrayList<GameData> list = new ArrayList<GameData>();
		list.add(gd);
		list.add(gd1);
		Iterable<GameData> itr = list;
		System.out.println(itr);

		Mockito.when(gameDataRepo.findAll()).thenReturn(itr);
		Iterable<GameData> result = gameEngineService2Impl.getAllQuestions();
		assertEquals(result, itr);
	}

	@Test
	public void testStore() {
		GameData gd = new GameData(1, 2, "Sqwe", "gfu", 3, 2, 4, 7, "ew", null, "yu", null, null, null, null);

		Mockito.when(gameDataRepo.save(gd)).thenReturn(gd);
		GameData result = gameEngineService2Impl.store(gd);
		assertNotNull(result);
	}

	@Test
	public void testFindByQId() {
		GameData gd = new GameData(1, 2, "Sqwe", "gfu", 3, 2, 4, 7, "ew", null, "yu", null, null, null, null);
		Mockito.when(gameDataRepo.findByQId(1)).thenReturn(gd);
		GameData result = gameEngineService2Impl.findByQId(1);
		assertEquals(result, gd);
	}

	@Test
	public void testDeleteAll() {
		Mockito.doNothing().when(gameDataRepo).deleteAll();
		gameDataRepo.deleteAll();
		verify(gameDataRepo, times(1)).deleteAll();

	}
}
