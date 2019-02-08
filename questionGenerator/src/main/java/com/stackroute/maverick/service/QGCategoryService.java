package com.stackroute.maverick.service;

import com.stackroute.maverick.domain.Category;

public interface QGCategoryService {

	/**
	 * Add new Categories
	 */
	Category addCategory(Category category);

	/**
	 * Return all Categories
	 */
	Iterable<Category> findAllCategories();

	/**
	 * find a Cateogy by id
	 */
	Category findCategoryId(int categoryId);

	/**
	 * find a Cateogy by name
	 */
	Category findByCategoryName(String categoryName);

	/**
	 * Update a Cateogy by Id
	 */
	Category updateByCategoryId(Category category);

}
