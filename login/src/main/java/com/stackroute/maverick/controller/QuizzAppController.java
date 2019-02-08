package com.stackroute.maverick.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.stackroute.maverick.Service.AuthenticationService;
import com.stackroute.maverick.Service.LoggedUserService;
import com.stackroute.maverick.Service.TokenRegService;
import com.stackroute.maverick.Service.UserService;
import com.stackroute.maverick.Service.UserServiceMongo;
import com.stackroute.maverick.demo.Sender;
import com.stackroute.maverick.domain.AuthenticationModel;
import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.LoggedUsers;
import com.stackroute.maverick.domain.SelectedCategoriesModel;
import com.stackroute.maverick.domain.TokenTableModel;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.domain.UserMongo;
import com.stackroute.maverick.token.JwtTokenProvider;

import io.micrometer.core.annotation.Timed;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@CrossOrigin("*")
@RequestMapping("api/q1")
@RestController
@Api(value = "QuizzAppControllerAPI")
public class QuizzAppController {

	@Bean
	SelectedCategoriesModel selectedCategoriesModel() {
		return new SelectedCategoriesModel();
	}
//
//	@Bean
//	public TokenTableModel tokenTableModel()
//	{
//	return new TokenTableModel();	
//	}

	@Autowired
	UserService userService;

	@Autowired
	AuthenticationService authenticationService;

	@Autowired
	UserServiceMongo usermongo;

	@Autowired
	UserMongo userMongoModel;

	AuthenticationManager authenticationManager;

	@Autowired
	LoggedUsers loggedUser;

	
	TokenTableModel tokenTableModel;

	@Autowired
	LoggedUserService loggedService;

	@Autowired
	TokenRegService tokenRegService;

	@Autowired
	JwtTokenProvider tokenProvider;

	@Autowired
	Sender sender;

	@Autowired
	SelectedCategoriesModel selectedCat;
	


	private String jwt;
	private String loginjwt;

	@Bean
	public LoggedUsers loggedUsers() {
		return new LoggedUsers();
	}
	@Autowired
	public TokenTableModel tokenModel() {
		return new TokenTableModel();
		
	}
	

	
	// constructor
	public QuizzAppController() {
	}

	@Timed(value = "quiz.user-service.getAllUsers", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	@ApiOperation("Gets the all users")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<Iterable<User>> showAllUsers() {

		return new ResponseEntity<Iterable<User>>(userService.findAll(), HttpStatus.OK);
	}

	/*@Timed(value = "quiz.user-service.addUser", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	@ApiOperation("Adds the user")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<User> addUser(@RequestBody User user) {
		System.out.println("user in register  ==== " + user.getEmail() + " " + user.getGender());
		// generate token while registeration
		jwt = tokenProvider.generateToken(user);
		System.out.println("token in addUser==>" + jwt);
		User u = userService.findByEmail(user.getEmail());	
		if (user.getEmail() == "admin.com" && user.getPassword() == "admin123") {
			user.setRole("ADMIN");
		} else {
			user.setRole("USER");
		}

		User newUser = userService.save(user);

		// TokenTableModel tokenTableModel = new TokenTableModel();

		// Addfing in token table
		//tokenTableModel.setToken(jwt);
		//tokenTableModel.setUserId(newUser.getUserId());
		//tokenRegService.addRegToken(tokenTableModel);

		// User u = userService.findByEmail(email);
		sender.sendUser(newUser);
		System.out.println("gender -----" + newUser.getGender());
		return new ResponseEntity<User>(newUser, HttpStatus.OK);
		// }
	}*/
	
	@RequestMapping(value = "/tokenReg", method = RequestMethod.POST)
	@ApiOperation("Adds the token")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<?> tokenGeneration(@RequestBody User user) {
		System.out.println("user in token reg  ==== " + user.getEmail() + " " + user.getGender());
		AuthenticationModel aModel = new AuthenticationModel();

		aModel.setEmail(user.getEmail());
		aModel.setPassword(user.getPassword());
		jwt = tokenProvider.generateToken(aModel);
		tokenTableModel.setToken(jwt);
		tokenTableModel.setUserId(user.getUserId());
		tokenRegService.addRegToken(tokenTableModel);
		System.out.println("--------token in controller tokenReg---------------------->" + jwt);
		return new ResponseEntity<>(jwt, HttpStatus.OK);
		
	}

	@Timed(value = "quiz.user-service.getallCategories", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/getallCategories", method = RequestMethod.GET)
	@ApiOperation("Gets the all users")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<Iterable<CategoriesModel>> showAllCategories() {
		System.out.println("inside getallcategories controller--");

		return new ResponseEntity<Iterable<CategoriesModel>>(userService.findAllCategories(), HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.addCategory", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/addCategory", method = RequestMethod.POST)
	@ApiOperation("Adds the category")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<CategoriesModel> addCategory(@RequestBody CategoriesModel categories) {
		CategoriesModel cat = userService.save(categories);
		System.out.println("categories added ======" + cat.getCategoryName());
		return new ResponseEntity<CategoriesModel>(cat, HttpStatus.OK);

	}

	@Timed(value = "quiz.user-service.addSelectedCategories_userId", histogram = true, percentiles = {
			0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/addSelectedCategories/{userId}", method = RequestMethod.POST)
	@ApiOperation("Adds the selected categories")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<List<SelectedCategoriesModel>> addSelectedCategory(@PathVariable("userId") String userId,
			@RequestBody List<CategoriesModel> categories) {
		// System.out.println("list size----"+categories.size());
		System.out.println("selected castegories===>> " + categories.toString());
		System.out.println("userId is " + userId);
		System.out.println("data in slected_table: " + userId + " " + categories.get(0).getCategoryId());
		List<SelectedCategoriesModel> catlist = new ArrayList<SelectedCategoriesModel>();
		for (int i = 0; i < categories.size(); i++) {
			// SelectedCategoriesModel selectedCat=null;
			// new SelectedCategoriesModel();
			System.out.println("Printing before parsing" + userId);
			selectedCat.setUserId(Integer.parseInt(userId));
			selectedCat.setSelectedCategoryId(categories.get(i).getCategoryId());
			System.out.println("cat after setting ==>" + selectedCat.getUserId());
			catlist.add(userService.save(selectedCat));
			sender.sendCategories(selectedCat);
		}
		// sender.sendCategoriesList(catlist);

		return new ResponseEntity<List<SelectedCategoriesModel>>(catlist, HttpStatus.OK);
		// return null;
	}

	@Timed(value = "quiz.user-service.auth", histogram = true, percentiles = { 0.95 }, extraTags = { "version", "1.0" })
	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	// public ResponseEntity<AuthenticationModel> authenticateUsers(@RequestBody
	// AuthenticationModel authenticationModel)
	public ResponseEntity<User> authenticateUsers(@RequestBody User user) {
		
		User checkLogin=authenticationService.authentication(user);
		System.out.println("check login --->"+checkLogin);
		if(checkLogin!=null) {
		Authentication authentication = authenticate(user);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		//loginjwt = tokenProvider.generateToken(authentication);
		System.out.println("loginjwt---->"+loginjwt);
		// tokenProvider.validateToken(jwt)
		
		//loggedUser.setToken(tokenProvider.generateToken(authentication));
		loggedUser.setEmail(user.getEmail());
		loggedUser.setPassword(user.getPassword());
		// loggedUser

		loggedService.addLogedUser(loggedUser);
		}

		User u = userService.findByEmail(user.getEmail());
		sender.sendUserDetails(u);
		// return jwt;
		return new ResponseEntity<User>(checkLogin, HttpStatus.OK);
		
	}
	@RequestMapping(value = "/tokenLog", method = RequestMethod.POST)
	@ApiOperation("Adds the token")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<String> loginTokenGeneration(@RequestBody User user) {
	  System.out.println("ajinkya===============");
	  AuthenticationModel aModel = new AuthenticationModel();

		aModel.setEmail(user.getEmail());
		aModel.setPassword(user.getPassword());
		loginjwt = tokenProvider.generateToken(aModel);
		//jwt = tokenProvider.generateToken(user);
		//loginjwt = tokenProvider.generateToken(user);
		System.out.println("--------token in tokenLogin---------------------->" + loginjwt);
		Gson gson = new Gson();
		String jsonjwt1 = gson.toJson(loginjwt);
		//JSONParser parser = new JSONParser();
		//JSONObject jsonjwt = (JSONObject) parser.parse(loginjwt);
		//System.out.println("token after json conversion-->"+jsonjwt);
		System.out.println("Token" + jsonjwt1);
		return new ResponseEntity<String>(jsonjwt1, HttpStatus.OK);
		
	}

	@Timed(value = "quiz.user-service.user_id", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@GetMapping("/user/{id}")
	public ResponseEntity<User> findUserById(User user, @PathVariable("id") String id) throws Exception {
		user.setUserId(Integer.parseInt(id));
		User user1 = userService.findByid(Integer.parseInt(id));
		// sender.sendUser(user1);
		return new ResponseEntity<User>(user1, HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.logout", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/logout", method = RequestMethod.DELETE)
	public String logout(@RequestBody LoggedUsers cred) {
		if (cred.getEmail().isEmpty()) {
			return "no user with given email logged in";

		} else {
			loggedService.removeLoggedUser(cred);
			return "user logged out";
		}
	}

	@Timed(value = "quiz.user-service.update_id", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	@ApiOperation("update the user on the id basis")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity updateUserbyId(@PathVariable(value = "id") String id, @RequestBody User user) {
		int id1 = Integer.parseInt(id);
		return new ResponseEntity<>(userService.updateUserById(id1, user), HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.getUser_id", histogram = true, percentiles = { 0.95 }, extraTags = { "version",
			"1.0" })
	@RequestMapping(value = "/getUser/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> findUserbyId(@PathVariable(value = "id") String id) {
		User u = userService.getUser(Integer.parseInt(id));
		System.out.println("User comming");
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.getUserByEmail_email", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/getUserByEmail/{email}", method = RequestMethod.GET)
	public ResponseEntity<User> findUserbyEmail(@PathVariable(value = "email") String email) {
		// User u = userService.getUser(Integer.parseInt(id));
		User u = userService.findByEmail(email);
		// sender.sendUser(u);
		System.out.println("User comming:" + u);
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}

	@RequestMapping(value = "/produceUserId/{id}", method = RequestMethod.GET)
	public ResponseEntity<String> findUserbyEmail(@PathVariable(value = "id") int id) {

		// sender.sendUserId(id);
		System.out.println("User comming:" + id);
		return new ResponseEntity<String>("done", HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.getUserByName_userName", histogram = true, percentiles = { 0.95 }, extraTags = {
			"version", "1.0" })
	@RequestMapping(value = "/getUserByName/{userName}", method = RequestMethod.GET)
	public ResponseEntity<User> findUserbyName(@PathVariable(value = "userName") String userName) {
		// User u = userService.getUser(Integer.parseInt(id));
		User u = userService.findByName(userName);
		// sender.sendUser(u);
		System.out.println("User getby name--:" + u);
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}

	public Authentication authenticate(User usernamePasswordAuthenticationToken) throws AuthenticationException {
		// TODO Auto-generated method stub
		return new UsernamePasswordAuthenticationToken(usernamePasswordAuthenticationToken.getEmail(),
				usernamePasswordAuthenticationToken.getPassword());
	}

}
