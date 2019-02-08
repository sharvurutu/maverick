/**
 * 
 */
package com.stackroute.maverick.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.MultiPlayerGame;
import com.stackroute.maverick.domain.MultiPlayerModel;
import com.stackroute.maverick.domain.MultipleQuestions;
import com.stackroute.maverick.domain.Users;
import com.stackroute.maverick.repository.MultiPlayerModelRepository;
import com.stackroute.maverick.repository.UsersRepository;

/**
 * @author ajay
 *
 */
@Service
public class MultiPlayerModelServiceImpl implements MultiPlayerModelService {

	@Autowired
	MultiPlayerModelRepository multiPlayerModelRepo;

	@Autowired
	MultiPlayerModel multiPlayerModel;

	// @Autowired
	MultipleQuestions multipleQuestions;

	List<MultipleQuestions> questions;

	@Autowired
	UsersRepository usersRepository;

	// @Override
	// public Iterable<MultiPlayerModel> getAllQuestions() {
	// // TODO Auto-generated method stub
	// return multiPlayerModelRepo.findAll();
	// }

	@Override
	public MultiPlayerModel storeQuestion(MultiPlayerModel multiPlayerModel) {
		// TODO Auto-generated method stub
		multiPlayerModelRepo.save(multiPlayerModel);
		return multiPlayerModel;
	}

	@Override
	public MultiPlayerModel findByGameId(int gameId) {
		// TODO Auto-generated method stub
		MultiPlayerModel multiPlayerModel = multiPlayerModelRepo.findByGameId(gameId);
		return multiPlayerModel;
	}

	@Override
	public MultiPlayerModel create(MultiPlayerGame multiPlayerGame) {
		// TODO Auto-generated method stub
		// return multiPlayerModelRepo.save(multiPlayerModel);
		questions = new ArrayList<>();

		multiPlayerModel.setGameId(multiPlayerGame.getGameId());
		System.out.println("GameId" + multiPlayerGame.getGameId());
		multiPlayerModel.setGameSessionId(multiPlayerGame.getGameId());
		for (int i = 0; i < multiPlayerGame.getAutoquestions().size(); i++) {
			multipleQuestions = new MultipleQuestions();
			multipleQuestions.setCorrectAnswer(multiPlayerGame.getAutoquestions().get(i).getCorrectAnswer());
			System.out.println(multiPlayerGame.getAutoquestions().get(i).getCorrectAnswer());
			multipleQuestions.setOp1(multiPlayerGame.getAutoquestions().get(i).getOption1());
			multipleQuestions.setOp2(multiPlayerGame.getAutoquestions().get(i).getOption2());
			multipleQuestions.setOp3(multiPlayerGame.getAutoquestions().get(i).getOption3());
			multipleQuestions.setOp4(multiPlayerGame.getAutoquestions().get(i).getOption4());
			multipleQuestions.setQuestionId(multiPlayerGame.getAutoquestions().get(i).getQuestionId());
			multipleQuestions.setQuestionStamp(multiPlayerGame.getAutoquestions().get(i).getQuestionStem());
			questions.add(multipleQuestions);
			// System.out.println(i);
			// System.out.println(questions.get(i).getCorrectAnswer());
			// multiPlayerModel.setQuestions(questions);

		}
		multiPlayerModel.setGameName(multiPlayerGame.getGameName());
		multiPlayerModel.setQuestions(questions);
		multiPlayerModelRepo.save(multiPlayerModel);
		System.out.println("Saved in database");
		return multiPlayerModel;
	}

	@Override
	public Iterable<MultiPlayerModel> getAllQuestions() {
		// TODO Auto-generated method stub
		return multiPlayerModelRepo.findAll();
	}

	@Override
	public MultiPlayerModel update(MultiPlayerModel updateMultiPlayer) {
		// TODO Auto-generated method stub
		MultiPlayerModel updateModel = multiPlayerModelRepo.save(updateMultiPlayer);

		return updateModel;
	}

}
