package com.stackroute.maverick.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.maverick.domain.AdminUser;
import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.Questions;
import com.stackroute.maverick.domain.Topic;
import com.stackroute.maverick.kafka.Sender;
import com.stackroute.maverick.repository.QGCategoryRepository;
//import com.stackroute.maverick.kafka.Sender;
import com.stackroute.maverick.service.QGCategoryService;

import io.micrometer.core.annotation.Timed;

@CrossOrigin("*")
@RequestMapping("/api/v1/question-generator")
@RestController
public class QGController {

	@Autowired
	private QGCategoryService qGCategoryService;

	@Autowired
	private Sender sender;
	
//	@Autowired
//	private QGCategoryRepository repo;

	/*
	 * Post a new category
	 */
	@Timed(value = "qg.post.categories", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category", method = RequestMethod.POST)
	public ResponseEntity<Category> addCategory(@RequestBody Category category) {
		Category newCategory = qGCategoryService.addCategory(category);

		CategoriesModel cat = new CategoriesModel();
		cat.setCategoryId(category.getCategoryId());
		cat.setCategoryName(category.getCategoryName());
		cat.setCategoryImage(category.getCategoryImage());
		sender.sendCategory(cat);
		sender.send(newCategory);
		return new ResponseEntity<Category>(newCategory, HttpStatus.OK);
	}

	/*
	 * Get all Categories
	 */
	@Timed(value = "qg.get.categories", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category", method = RequestMethod.GET)
	public ResponseEntity<Iterable<Category>> getAllCategories(Category category) {
		Iterable<Category> allCategories = qGCategoryService.findAllCategories();
		sender.sendId();
		sender.sendGameId();
		return new ResponseEntity<Iterable<Category>>(allCategories, HttpStatus.OK);
	}

	/*
	 * Get a category by ID
	 */
	@RequestMapping(value = "/categoryId/{categoryId}", method = RequestMethod.GET)
	public ResponseEntity<Category> findByCategoryId(@PathVariable(value = "categoryId") int categoryId) {
		Category foundCategoryById = qGCategoryService.findCategoryId(categoryId);
		return new ResponseEntity<Category>(foundCategoryById, HttpStatus.OK);
	}
	
//	@RequestMapping(value = "categoryId/{categoryId}", method = RequestMethod.DELETE)
//	public ResponseEntity<Void> delete(@PathVariable(value = "categoryId") int categoryId) {
//		repo.deleteById(categoryId);
//		return new ResponseEntity<Void>(HttpStatus.OK);
//	}

	/*
	 * Get a category by Name
	 */
	@Timed(value = "qg.getByName.categories", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryName}", method = RequestMethod.GET)
	@Timed(value = "qg.get.categoriesByName", percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	public ResponseEntity<Category> findByCategoryName(@PathVariable(value = "categoryName") String categoryName) {
		Category foundCategoryByName = qGCategoryService.findByCategoryName(categoryName);
		return new ResponseEntity<Category>(foundCategoryByName, HttpStatus.OK);
	}

	/*
	 * Add a new topic in a category by category ID
	 */
	@Timed(value = "qg.add.topics", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/topics", method = RequestMethod.PUT)
	public ResponseEntity<Category> addTopicByCategoryName(@RequestBody Category category,
			@PathVariable(value = "categoryId") int categoryId) {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Topic> topics = new ArrayList<>();
		while (itr.hasNext()) {
			Topic str = itr.next();
			topics.add(str);
		}

		Topic ex = category.getTopic().get(0);
		List<Questions> questionList = new ArrayList<>();
		Topic topic1 = new Topic();
		topic1.setTopicId(ex.getTopicId());
		topic1.setTopicName(ex.getTopicName());
		topic1.setTopicImage(ex.getTopicImage());
		topic1.setQuestions(questionList);
		topics.add(topic1);
		foundCategoryByName.setTopic(topics);
		qGCategoryService.updateByCategoryId(foundCategoryByName);
		sender.send(foundCategoryByName);
		return new ResponseEntity<Category>(foundCategoryByName, HttpStatus.OK);
	}

	/*
	 * Get all topics in a category by category Id
	 */
	@Timed(value = "qg.get.topics", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/topics", method = RequestMethod.GET)
	public ResponseEntity<List<Topic>> findTopicsUnderACategory(@PathVariable(value = "categoryId") int categoryId) {
		Category foundCategoryById = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryById.getTopic().iterator();
		List<Topic> topics = new ArrayList<>();

		while (itr.hasNext()) {
			Topic str = itr.next();
			topics.add(str);
		}
		return new ResponseEntity<List<Topic>>(topics, HttpStatus.OK);
	}

	/*
	 * Get a particular topic by topic name in a category by category name
	 */
	@Timed(value = "qg.getById.topic", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryName}/{topicName}", method = RequestMethod.GET)
	public ResponseEntity<List<Topic>> findByTopicNameUnderACategory(
			@PathVariable(value = "categoryName") String categoryName,
			@PathVariable(value = "topicName") String topicName) {
		Category foundCategoryByName = qGCategoryService.findByCategoryName(categoryName);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Topic> topics = new ArrayList<>();
		while (itr.hasNext()) {
			Topic str = itr.next();
			if (str.getTopicName().equalsIgnoreCase(topicName)) {
				topics.add(str);
			}
		}
		return new ResponseEntity<List<Topic>>(topics, HttpStatus.OK);
	}

	/*
	 * Add a new question in a topic by topic name and also with category ID
	 */
	@Timed(value = "qg.post.question", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/questions", method = RequestMethod.PUT)
	public ResponseEntity<Category> addAQuestionUnderATopic(@RequestBody Topic topic,
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName) {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Topic> topics = new ArrayList<>();
		List<Questions> listQuestions = new ArrayList<>();
		Topic topicStr = null;
		while (itr.hasNext()) {
			topicStr = itr.next();
			topics.add(topicStr);
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				Iterator<Questions> str = topicStr.getQuestions().iterator();
				while (str.hasNext()) {
					Questions questionstr = str.next();
					listQuestions.add(questionstr);
				}
			}
		}
		List<AdminUser> userList = new ArrayList<>();
		Questions question = topic.getQuestions().get(0);
		Questions que = new Questions();
		que.setQuestionId(question.getQuestionId());
		que.setQuestionLevel(question.getQuestionLevel());
		que.setQuestionStem(question.getQuestionStem());
		que.setQuestionType(question.getQuestionType());
		que.setOption1(question.getOption1());
		que.setOption2(question.getOption2());
		que.setOption3(question.getOption3());
		que.setOption4(question.getOption4());
		que.setCorrectAnswer(question.getCorrectAnswer());
		que.setUser(userList);
		listQuestions.add(que);
		topicStr.setQuestions(listQuestions);
		qGCategoryService.updateByCategoryId(foundCategoryByName);
		sender.send(foundCategoryByName);
		return new ResponseEntity<Category>(foundCategoryByName, HttpStatus.OK);
	}

	/*
	 * Get all questions in a topic by topic name and also with category ID
	 */
	@Timed(value = "qg.get.questions", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/questions", method = RequestMethod.GET)
	public ResponseEntity<List<Questions>> findAllQuestionsUnderATopic(
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName) {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Questions> listQuestions = new ArrayList<>();
		while (itr.hasNext()) {
			Topic topicStr = itr.next();
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				Iterator<Questions> str = topicStr.getQuestions().iterator();
				while (str.hasNext()) {
					Questions questionstr = str.next();
					listQuestions.add(questionstr);
				}
			}
		}
		return new ResponseEntity<List<Questions>>(listQuestions, HttpStatus.OK);
	}

	/*
	 * Get a particular question by its Id in a topic by topic name and also with
	 * category ID
	 */
	@Timed(value = "qg.getById.question", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/{questionId}", method = RequestMethod.GET)
	public ResponseEntity<List<Questions>> findAQuestionByIdUnderATopic(
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName,
			@PathVariable(value = "questionId") int questionId) {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Questions> listQuestions = new ArrayList<>();
		while (itr.hasNext()) {
			Topic topicStr = itr.next();
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				Iterator<Questions> str = topicStr.getQuestions().iterator();
				while (str.hasNext()) {
					Questions questionstr = str.next();
					if (questionId == questionstr.getQuestionId()) {
						listQuestions.add(questionstr);
					}
				}
			}
		}
		return new ResponseEntity<List<Questions>>(listQuestions, HttpStatus.OK);
	}

	/*
	 * Update a question by its Id in a topic by topic name and also with category
	 * Name
	 */
	@Timed(value = "qg.update.question", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/{questionId}", method = RequestMethod.PUT)
	public ResponseEntity<Category> updateAQuestionByIdUnderATopic(@RequestBody Questions question,
			@PathVariable(value = "categoryId") int categoryId, @PathVariable(value = "topicName") String topicName,
			@PathVariable(value = "questionId") int questionId) {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Topic> topics = new ArrayList<>();
		List<Questions> listQuestions = new ArrayList<>();
		Topic topicStr = null;
		while (itr.hasNext()) {
			topicStr = itr.next();
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				Iterator<Questions> str = topicStr.getQuestions().iterator();
				while (str.hasNext()) {
					Questions questionstr = str.next();
					if (questionId == questionstr.getQuestionId()) {
						questionstr.setQuestionId(question.getQuestionId());
						questionstr.setQuestionLevel(question.getQuestionLevel());
						questionstr.setQuestionStem(question.getQuestionStem());
						questionstr.setQuestionType(question.getQuestionType());
						questionstr.setOption1(question.getOption1());
						questionstr.setOption2(question.getOption2());
						questionstr.setOption3(question.getOption3());
						questionstr.setOption4(question.getOption4());
						questionstr.setCorrectAnswer(question.getCorrectAnswer());
						listQuestions.add(questionstr);
					} else {
						listQuestions.add(questionstr);
					}
				}
				topicStr.setQuestions(listQuestions);
			}
			topics.add(topicStr);
		}
		qGCategoryService.updateByCategoryId(foundCategoryByName);
		sender.send(foundCategoryByName);
		return new ResponseEntity<Category>(foundCategoryByName, HttpStatus.OK);
	}

	/*
	 * Delete a particular question by its Id in a topic by topic name and also with
	 * category ID
	 */
	@Timed(value = "qg.Delete.question", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/{questionId}", method = RequestMethod.DELETE)
	public ResponseEntity<Category> deleteAQuestionByIdUnderATopic(@PathVariable(value = "categoryId") int categoryId,
			@PathVariable(value = "topicName") String topicName, @PathVariable(value = "questionId") int questionId) {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Topic> topics = new ArrayList<>();
		List<Questions> listQuestions = new ArrayList<>();
		Topic topicStr = null;
		while (itr.hasNext()) {
			topicStr = itr.next();
			topics.add(topicStr);
			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
				Iterator<Questions> str = topicStr.getQuestions().iterator();
				while (str.hasNext()) {
					Questions questionstr = str.next();
					listQuestions.add(questionstr);
					if (questionId == questionstr.getQuestionId()) {
						listQuestions.remove(questionstr);
					}
				}
			}
		}
		topicStr.setQuestions(listQuestions);
		qGCategoryService.updateByCategoryId(foundCategoryByName);
		sender.send(foundCategoryByName);
		return new ResponseEntity<Category>(foundCategoryByName, HttpStatus.OK);
	}
}
