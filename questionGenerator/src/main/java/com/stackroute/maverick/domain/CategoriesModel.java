package com.stackroute.maverick.domain;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categories")
public class CategoriesModel {

	private int categoryId;
	private String categoryName;
	private String categoryImage;

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryImage() {
		return categoryImage;
	}

	public void setCategoryImage(String categoryImage) {
		this.categoryImage = categoryImage;
	}

	public CategoriesModel() {

	}

	public CategoriesModel(int categoryId, String categoryName, String categoryImage) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.categoryImage = categoryImage;
	}

}
