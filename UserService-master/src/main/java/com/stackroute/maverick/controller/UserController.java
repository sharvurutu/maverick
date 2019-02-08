package com.stackroute.maverick.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.maverick.domain.UserProfile;
import com.stackroute.maverick.service.KafkaProducer;
import com.stackroute.maverick.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	KafkaProducer producer;
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public ResponseEntity<UserProfile> addUser(@RequestBody UserProfile user) {
		System.out.println("------------from controller---------" + user);
		return new ResponseEntity<UserProfile>(userService.addUser(user), HttpStatus.OK);
	}

	@RequestMapping(value = "/getUser/{id}", method = RequestMethod.GET)
	public ResponseEntity<UserProfile> findUserbyId(@PathVariable(value = "id") String id) {
		int userId = Integer.parseInt(id);
		System.out.println(userId);
		UserProfile u = userService.getUser(userId);
		producer.sendUser(u);
		System.out.println("after service call:" + u.getUserId());
		return new ResponseEntity<UserProfile>(userService.getUser(userId), HttpStatus.OK);
	}

	@SuppressWarnings("rawtypes")
	@RequestMapping("/getAll")
	public ResponseEntity findAllUser() {
		userService.getAllUser();
		return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
	}

	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
	public ResponseEntity deleteUser(@PathVariable(value = "id") String id, UserProfile user) {
		int userId = Integer.parseInt(id);
		user.setUserId(userId);
		System.out.println(userId);
		return new ResponseEntity<>(userService.deleteUser(user), HttpStatus.OK);
	}

	@RequestMapping(value = "/updateUser/{email}", method = RequestMethod.PUT)
	public UserProfile updateUser(@PathVariable(value = "email") String email, @RequestBody UserProfile user) {
		String email1 = user.getEmail();
		UserProfile up = userService.getByEmail(email1);
		up.setUserName(user.getUserName());
		System.out.println("ABOUT ME HERE>>>>>>> " + user.getAboutMe());
		if (user.getAboutMe() != null) {
			up.setAboutMe(user.getAboutMe());
		}
		up.setAge(user.getAge());
		if (user.getCoverImage() != null) {
			up.setCoverImage(user.getCoverImage());
		}
		up.setEmail(user.getEmail());
		if (user.getImage() != null) {
			up.setImage(user.getImage());
		}
		if (user.getLocation() != null) {
			up.setLocation(user.getLocation());
		}
		if (user.getMobile() != 0L) {
			up.setMobile(user.getMobile());
		}
		up.setPassword(user.getPassword());
		if (user.getStatus() != null) {
			up.setStatus(user.getStatus());
		}
		if (user.getStatus() != null) {
			up.setStatus(user.getStatus());
		}
		if (user.getGameCount() != 0) {
			up.setGameCount(user.getGameCount());
		}
		if (user.getGamePlayed() != null) {
			up.setGamePlayed(user.getGamePlayed());
		}
		if (user.getLevel() != 0) {
			up.setLevel(user.getLevel());
		}
		if (user.getLevelName() != null) {
			up.setLevelName(user.getLevelName());
		}
		up.setGender(user.getGender());
		System.out.println("_____CONTROLLER AFTER UPDATE ___" + up.getUserName());
		return userService.updateUserData(up);
	}

	@RequestMapping(value = "/getUserByEmail/{email}", method = RequestMethod.GET)
	public ResponseEntity<UserProfile> findUserbyEmail(@PathVariable(value = "email") String email) {
		System.out.println("-------Email from FRONT-END------" + email);
		UserProfile u = userService.getByEmail(email);
		System.out.println("------------from byemail method----" + email);
		System.out.println("-----------fetched user---" + u);
		System.out.println("after service call: (E - mail of user)" + u.getEmail());
		return new ResponseEntity<UserProfile>(userService.getByEmail(email), HttpStatus.OK);
	}

	@RequestMapping(value = "/getProfilePercent/{email}", method = RequestMethod.GET)
	public float findProfilePercent(@PathVariable(value = "email") String email) {
		UserProfile u = userService.getByEmail(email);
		System.out.println("------------from byemail method----" + email);
		System.out.println("-----------fetched user---" + u);
		System.out.println("after service call: (E - mail of user)" + u.getEmail());
		float nullChecker = 0;

		if (u.getUserName() == null || u.getUserName().isEmpty()) {
			nullChecker++;
		}
		if (u.getPassword() == null || u.getPassword().isEmpty()) {
			nullChecker++;
		}
		if (u.getEmail() == null || u.getEmail().isEmpty()) {
			nullChecker++;
		}
		if (u.getAge() == null || u.getAge().isEmpty()) {
			nullChecker++;
		}
		if (u.getMobile() == 0L) {
			nullChecker++;
		}
		if (u.getImage() == null || u.getImage().isEmpty()) {
			nullChecker++;
		}
		if (u.getCoverImage() == null || u.getCoverImage().isEmpty()) {
			nullChecker++;
		}
		if (u.getGender() == null || u.getGender().isEmpty()) {
			nullChecker++;
		}
		if (u.getLocation() == null || u.getLocation().isEmpty()) {
			nullChecker++;
		}
		if (u.getAboutMe() == null || u.getAboutMe().isEmpty()) {
			nullChecker++;
		}
		if (u.getStatus() == null || u.getStatus().isEmpty()) {
			nullChecker++;
		}
		float a = ((nullChecker * 100) / 11);
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("Value Of percent ---->>>>>" + a);
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");

		return a;
	}

	// @RequestMapping(value = "/getFromMyMongoByEmail/{email}", method =
	// RequestMethod.GET)
	// public ResponseEntity<UserProfile> findProfilebyEmail(@PathVariable(value =
	// "email") String email) {
	// UserProfile u = userService.getByEmail(email);
	// System.out.println("------------from byemail method----" + email);
	// System.out.println("-----------fetched user---" + u);
	// System.out.println("after service call:" + u.getEmail());
	// return new ResponseEntity<UserProfile>(userService.getByEmail(email),
	// HttpStatus.OK);
	// }
}
