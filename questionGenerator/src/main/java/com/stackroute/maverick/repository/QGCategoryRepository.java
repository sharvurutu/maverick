package com.stackroute.maverick.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.Category;

@Repository
public interface QGCategoryRepository extends MongoRepository<Category, Integer> {

	Category findByCategoryName(String categoryName);

	Category findByCategoryId(int categoryId);

}
