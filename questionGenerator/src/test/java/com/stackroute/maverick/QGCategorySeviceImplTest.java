package com.stackroute.maverick;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.repository.QGCategoryRepository;
import com.stackroute.maverick.service.QGCategoryServiceImpl;

public class QGCategorySeviceImplTest {

	@Mock
	QGCategoryRepository qGCategoryRepo;

	@InjectMocks
	private QGCategoryServiceImpl qGCategoryService;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testAddCategory() {
		Category mockCategory = new Category(4, "politics", "imageURL", null);
		Mockito.when(qGCategoryRepo.save(mockCategory)).thenReturn(mockCategory);
		Category result = qGCategoryService.addCategory(mockCategory);
		assertEquals(4, result.getCategoryId());
	}

	@Test
	public void testGetAllCategories() {
		Category mockCategory = new Category(4, "politics", "imageURL", null);
		Category mockCategory1 = new Category(5, "education", "imageURL1", null);

		List<Category> catList = new ArrayList<>();
		catList.add(mockCategory);
		catList.add(mockCategory1);

		Iterable<Category> itr = catList;

		Mockito.when(qGCategoryRepo.findAll()).thenReturn((List<Category>) itr);
		Iterable<Category> result = qGCategoryService.findAllCategories();
		assertEquals(2, ((List<Category>) result).size());
	}

	@Test
	public void testFindCategoryById() {

		Category mockCategory = new Category(4, "politics", "imageURL", null);
		Mockito.when(qGCategoryRepo.findByCategoryId(4)).thenReturn(mockCategory);

		Category result = qGCategoryService.findCategoryId(4);

		assertEquals(4, result.getCategoryId());

	}

	@Test
	public void testFindCategoryByName() {

		Category mockCategory = new Category(4, "politics", "imageURL", null);
		Mockito.when(qGCategoryRepo.findByCategoryName("politics")).thenReturn(mockCategory);

		Category result = qGCategoryService.findByCategoryName("politics");

		assertEquals(4, result.getCategoryId());

	}

	@Test
	public void testUpdaterestaurantById() {
		Category mockCategory = new Category(4, "politics", "imageURL", null);
		Mockito.when(qGCategoryRepo.save(mockCategory)).thenReturn(mockCategory);
		Category result = qGCategoryService.updateByCategoryId(mockCategory);
		assertEquals(mockCategory, result);
	}

}
