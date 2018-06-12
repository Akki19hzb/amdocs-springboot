package com.webapplication.service;

import java.util.List;

import com.webapplication.model.Population;

public interface PopulationServiceInterface {

	public List<Population> getAllPopulation();
	
	public List<Population> getAllPopulations(String email, String password);
}
