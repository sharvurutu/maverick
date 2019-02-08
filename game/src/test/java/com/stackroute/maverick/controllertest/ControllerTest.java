package com.stackroute.maverick.controllertest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import com.stackroute.maverick.controller.GameController;
import com.stackroute.maverick.kafka.Sender;
import com.stackroute.maverick.repositories.ActualDataRepo;
import com.stackroute.maverick.repositories.GameDataRepo;
import com.stackroute.maverick.services.GameEngineService2;

@RunWith(SpringRunner.class)
@WebMvcTest(GameController.class)
public class ControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private GameEngineService2 game;

	@MockBean
	private GameDataRepo repo;

	@MockBean
	ActualDataRepo arepo;

	@MockBean
	private Sender sender;

	@Test
	public void testGetData() throws Exception {
		mockMvc.perform(get("/api/v1/getdata")).andExpect(status().isOk());
	}

	@Test
	public void testAnswers() throws Exception {
		mockMvc.perform(post("/api/v1/result").contentType(MediaType.ALL)).andReturn();
	}
}