package com.webapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webapplication.model.Population;
import com.webapplication.model.User;
import com.webapplication.service.PopulationServiceInterface;
import com.webapplication.service.UserServiceInterface;

@RestController
@RequestMapping({ "/api" })
public class UserController {

	@Autowired
	private UserServiceInterface userService;

	@Autowired
	private PopulationServiceInterface populationService;

	@RequestMapping("/users")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@RequestMapping("/population")
	public ResponseEntity<List<Population>> getAllPopulation() {
		List<Population> populationList = populationService.getAllPopulation();
		return new ResponseEntity<List<Population>>(populationList, HttpStatus.OK);
	}
	
	@RequestMapping(value="populations", method = RequestMethod.GET)
	public ResponseEntity<List<Population>> getAllPopulations(@RequestParam("email") String email, @RequestParam("password") String password) {
		System.out.println("HIT");
		List<Population> populationList = populationService.getAllPopulations(email, password);
		if (populationList != null) {
			return new ResponseEntity<List<Population>>(populationList, HttpStatus.OK);

		} else {
			return new ResponseEntity<List<Population>>(populationList, HttpStatus.UNAUTHORIZED);
		}

	}

	@RequestMapping("/users/{id}")
	public User getUsers(@PathVariable("id") String id) {
		return userService.getUser(id);
	}

	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public ResponseEntity<Object> addUser(@RequestBody User user) {
		userService.addUser(user);
		return new ResponseEntity<Object>(user, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTopic(@RequestBody User User, @PathVariable("id") String id) {
		userService.updateUser(User, id);
		return new ResponseEntity<Object>(User, HttpStatus.OK);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
		userService.deleteUser(id);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@RequestMapping(value = "/users/check", method = RequestMethod.POST)
	public User checkUsers(@RequestBody User user) {
		return userService.checkUser(user);
	}

}
