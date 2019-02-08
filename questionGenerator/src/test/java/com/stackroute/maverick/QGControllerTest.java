package com.stackroute.maverick;

import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.stackroute.maverick.controller.QGController;
import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.Topic;
import com.stackroute.maverick.kafka.Sender;
import com.stackroute.maverick.service.QGCategoryService;

@RunWith(SpringRunner.class)
@WebMvcTest(QGController.class)

public class QGControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private Sender sender;

	@MockBean
	private QGCategoryService qGCategoryService;

	@Test
	public void testAddCategory() throws Exception  {
		String categoryJson = "{" 
				   + "      \"categoryId\": \"1\"," 
				   + "      \"categoryName\": \"politics\","                  
				   + "      \"categoryImage\" : \"imageURL\"," 
				   + "      \"topic\" : \"list\""
				   + "    }";
		
		List<Topic> list = new ArrayList<>();
	    Category mockCategory = new Category(1,"politics", "imageURL",list);
		
		Mockito.when(qGCategoryService.addCategory(Mockito.any(Category.class)))
			.thenReturn(mockCategory);
		
		MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/question-generator/category")
				.content(categoryJson)
				.contentType(MediaType.APPLICATION_JSON))
			.andReturn();
		assertNotNull(result.getResponse().getContentAsString());
	}
	
	@Test
	public void testGetAllCategories() throws Exception {
		mockMvc.perform(get("/api/v1/question-generator/category"))
      .andExpect(status().isOk());
	}
	
	@Test
	public void testFindByCategoryId() throws Exception {
		mockMvc.perform(get("/api/v1/question-generator/category/1"))
	      .andExpect(status().isOk());
	}
	
	@Test
	public void testFindByCategoryName() throws Exception {
		mockMvc.perform(get("/api/v1/question-generator/category/politics"))
	      .andExpect(status().isOk());
	}
	
}
