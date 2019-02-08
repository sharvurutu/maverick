package com.stackroute.maverick.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.repository.QGCategoryRepository;

@Service
public class QGCategoryServiceImpl implements QGCategoryService {

	@Autowired
	private QGCategoryRepository qGRedisRepository;

	@Override
	public Category addCategory(Category category) {
		qGRedisRepository.save(category);
		return category;
	}

	@Override
	public Iterable<Category> findAllCategories() {
		Iterable<Category> categoryList = qGRedisRepository.findAll();
		return categoryList;
	}

	@Override
	public Category findCategoryId(int categoryId) {
		Category foundCategory = qGRedisRepository.findByCategoryId(categoryId);
		return foundCategory;
	}

	@Override
	public Category findByCategoryName(String categoryName) {
		Category foundByCategoryName = qGRedisRepository.findByCategoryName(categoryName);
		return foundByCategoryName;
	}

	@Override
	public Category updateByCategoryId(Category category) {
		return qGRedisRepository.save(category);
	}
}