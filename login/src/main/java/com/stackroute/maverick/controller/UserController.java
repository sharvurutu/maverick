package com.stackroute.maverick.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.maverick.Service.TokenRegService;
import com.stackroute.maverick.Service.UserService;
import com.stackroute.maverick.demo.Sender;
import com.stackroute.maverick.domain.AuthenticationModel;
import com.stackroute.maverick.domain.TokenTableModel;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.token.JwtTokenProvider;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin("*")
@RestController
@Api(value = "QuizzAppControllerAPI")
public class UserController {
	
	
	AuthenticationModel aModel;
	
	@Autowired
	Sender sender;
	
	
	TokenTableModel tokenTableModel;

	@Autowired
	UserService userService;
	@Autowired
	TokenRegService tokenRegService;

	@Autowired
	JwtTokenProvider tokenProvider;
	
	@Autowired
	public AuthenticationModel authenticationModel() {
		return new AuthenticationModel();
		
	}
	@Autowired
	public TokenTableModel tokenTableModel() {
		return new TokenTableModel();
		
	}
	
	private String jwt;
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	@ApiOperation("Adds the user")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "ok", response = User.class) })
	public ResponseEntity<User> addUser(@RequestBody User user) {
		System.out.println("user in register  ==== " + user.getEmail() + " " + user.getGender());
		// generate token while registeration

		User u = userService.findByEmail(user.getEmail());	
		if (user.getEmail() == "admin.com" && user.getPassword() == "admin123") {
			user.setRole("ADMIN");
		} else {
			user.setRole("USER");
		}

		User newUser = userService.save(user);

		// TokenTableModel tokenTableModel = new TokenTableModel();

		// Addfing in token table
	/*	tokenTableModel.setToken(jwt);
		tokenTableModel.setUserId(newUser.getUserId());
		tokenRegService.addRegToken(tokenTableModel);
*/
		// User u = userService.findByEmail(email);
		sender.sendUser(newUser);
		System.out.println("gender -----" + newUser.getGender());
		return new ResponseEntity<User>(newUser, HttpStatus.OK);
		// }
	}
}
