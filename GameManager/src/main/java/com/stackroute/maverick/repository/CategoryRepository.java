package com.stackroute.maverick.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.Category;
@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer>{

	Optional<Category> findByCategoryId(int categoryId);

}
