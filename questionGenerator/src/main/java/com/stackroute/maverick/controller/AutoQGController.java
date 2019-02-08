package com.stackroute.maverick.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.stackroute.maverick.domain.Category;
import com.stackroute.maverick.domain.LanguageResults;
import com.stackroute.maverick.domain.Main;
import com.stackroute.maverick.domain.PresidentMain;
import com.stackroute.maverick.domain.Questions;
import com.stackroute.maverick.domain.Topic;
import com.stackroute.maverick.kafka.Sender;
import com.stackroute.maverick.service.QGCategoryService;
import com.stackroute.maverick.service.SparQLQueryService;

import io.micrometer.core.annotation.Timed;

@CrossOrigin("*")
@RequestMapping("/api/v1/question-generator")
@RestController
public class AutoQGController {

	@Autowired
	private QGCategoryService qGCategoryService;

	@Autowired
	private Sender sender;

	@Autowired
	private SparQLQueryService sparQLQueryService;

	@RequestMapping(value = "/get", method = RequestMethod.GET)
	public void get() throws JsonParseException, JsonMappingException, IOException {
		LanguageResults langResults = new LanguageResults();
		sparQLQueryService.cricketers(langResults);
		}

	/*
	 * Get all questions in a topic by topic name and also with category ID
	 */
//	@RequestMapping(value = "/category/{categoryId}/{topicName}/auto-questions", method = RequestMethod.GET)
//	public ResponseEntity<List<Questions>> autoQuestionsUnderATopic(@PathVariable(value = "categoryId") int categoryId,
//			@PathVariable(value = "topicName") String topicName)
//			throws JsonParseException, JsonMappingException, IOException {
//		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
//		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
//		List<Questions> listQuestions = new ArrayList<>();
//		while (itr.hasNext()) {
//			Topic topicStr = itr.next();
//			if (topicStr.getTopicName().equalsIgnoreCase(topicName)) {
//				Main main = new Main();
//				Main data = sparQLQueryService.capitals(main);
//				String questionStem = "What is capital of ";
//				Random rand = new Random();
//				int i = rand.nextInt(data.getResults().getBindings().size()) + 1;
//				int j = rand.nextInt(data.getResults().getBindings().size()) + 1;
//				int k = rand.nextInt(data.getResults().getBindings().size()) - 3;
//				for (int c = 0; c < data.getResults().getBindings().size(); c++) {
//					Questions question = new Questions();
//					question.setQuestionId(c + 1);
//					question.setQuestionStem(
//							questionStem + data.getResults().getBindings().get(c).getCountry().getValue() + "?");
//					question.setQuestionLevel(1);
//					question.setQuestionType("Auto");
//					question.setOption1(data.getResults().getBindings().get(i).getCapital().getValue());
//					question.setOption2(data.getResults().getBindings().get(j).getCapital().getValue());
//					question.setOption3(data.getResults().getBindings().get(c).getCapital().getValue());
//					question.setOption4(data.getResults().getBindings().get(k).getCapital().getValue());
//					question.setCorrectAnswer(data.getResults().getBindings().get(c).getCapital().getValue());
//					listQuestions.add(question);
//					System.out.println(question.getQuestionStem());
//				}
//				topicStr.setQuestions(listQuestions);
//			}
//		}
//		qGCategoryService.updateByCategoryId(foundCategoryByName);
//		sender.send(foundCategoryByName);
//		return new ResponseEntity<List<Questions>>(listQuestions, HttpStatus.OK);
//	}

	/*
	 * Get all questions in a topic by topic name and also with category ID
	 */
	@Timed(value = "qg.get.AuroGenerationquestions", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/category/{categoryId}/{topicName}/auto-questions", method = RequestMethod.GET)
	public ResponseEntity<List<Questions>> autoQuestionsAUnderATopic(@PathVariable(value = "categoryId") int categoryId,
			@PathVariable(value = "topicName") String topicName)
			throws JsonParseException, JsonMappingException, IOException {
		Category foundCategoryByName = qGCategoryService.findCategoryId(categoryId);
		Iterator<Topic> itr = foundCategoryByName.getTopic().iterator();
		List<Questions> listQuestions = new ArrayList<>();
		while (itr.hasNext()) {
			Topic topicStr = itr.next();
			if (topicStr.getTopicName().equalsIgnoreCase("capitals")) {
				Main main = new Main();
				Main data = sparQLQueryService.capitals(main);
				String questionStem = "What is capital of ";
				Random rand = new Random();
				int i = rand.nextInt(data.getResults().getBindings().size()) + 1;
				int j = rand.nextInt(data.getResults().getBindings().size()) + 1;
				int k = rand.nextInt(data.getResults().getBindings().size()) - 3;
				for (int c = 0; c < data.getResults().getBindings().size(); c++) {
					Questions question = new Questions();
					question.setQuestionId(c + 1);
					question.setQuestionStem(
							questionStem + data.getResults().getBindings().get(c).getCountry().getValue() + "?");
					question.setQuestionLevel(1);
					question.setQuestionType("Auto");
					question.setOption1(data.getResults().getBindings().get(i).getCapital().getValue());
					question.setOption2(data.getResults().getBindings().get(j).getCapital().getValue());
					question.setOption3(data.getResults().getBindings().get(c).getCapital().getValue());
					question.setOption4(data.getResults().getBindings().get(k).getCapital().getValue());
					question.setCorrectAnswer(data.getResults().getBindings().get(c).getCapital().getValue());
					listQuestions.add(question);
					System.out.println(question.getQuestionStem());
				}
				topicStr.setQuestions(listQuestions);
			}
			if (topicStr.getTopicName().equalsIgnoreCase("US-Presidents")) {
				PresidentMain main = new PresidentMain();
				PresidentMain data = sparQLQueryService.Presidents(main);
				String questionStem = "When and how President ";
				Random rand = new Random();
				int i = rand.nextInt(data.getResults().getBindings().size()) + 1;
				int j = rand.nextInt(data.getResults().getBindings().size()) + 1;
				int k = rand.nextInt(data.getResults().getBindings().size()) + 1;
				for (int c = 0; c < data.getResults().getBindings().size(); c++) {
					Questions question = new Questions();
					question.setQuestionId(c + 1);
					question.setQuestionStem(questionStem
							+ data.getResults().getBindings().get(c).getPresident().getValue() + " Died ?");
					question.setQuestionLevel(1);
					question.setQuestionType("Auto");
					question.setOption1(data.getResults().getBindings().get(i).getDod().getValue() + " & "
							+ data.getResults().getBindings().get(i).getCause().getValue());
					question.setOption2(data.getResults().getBindings().get(j).getDod().getValue() + " & "
							+ data.getResults().getBindings().get(k).getCause().getValue());
					question.setOption3(data.getResults().getBindings().get(c).getDod().getValue() + " & "
							+ data.getResults().getBindings().get(c).getCause().getValue());
					question.setOption4(data.getResults().getBindings().get(k).getDod().getValue() + " & "
							+ data.getResults().getBindings().get(j).getCause().getValue());
					question.setCorrectAnswer(data.getResults().getBindings().get(c).getDod().getValue() + " & "
							+ data.getResults().getBindings().get(c).getCause().getValue());
					listQuestions.add(question);
					System.out.println(question.getQuestionStem());
				}
				topicStr.setQuestions(listQuestions);
			}
		}
		qGCategoryService.updateByCategoryId(foundCategoryByName);
		sender.send(foundCategoryByName);
		return new ResponseEntity<List<Questions>>(listQuestions, HttpStatus.OK);
	}

}
