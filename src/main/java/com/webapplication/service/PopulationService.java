package com.webapplication.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapplication.model.Population;
import com.webapplication.model.User;
import com.webapplication.repository.PopulationRepository;
import com.webapplication.repository.UserRepository;

@Service
public class PopulationService implements PopulationServiceInterface {

	@Autowired
	private PopulationRepository populationRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<Population> getAllPopulation() {
		List<Population> population = new ArrayList<>();
		populationRepository.findAll().forEach(population::add);
		return population;
	}

	@Override
	public List<Population> getAllPopulations(String email, String password) {
		List<Population> population = new ArrayList<>();
		User user = userRepository.findByEmail(email);
		if (user.getPassword().equals(password)) {
			populationRepository.findAll().forEach(population::add);
			return population;
		} else
			return null;

	}
}
