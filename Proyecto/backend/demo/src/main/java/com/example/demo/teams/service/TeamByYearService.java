package com.example.demo.teams.service;

import java.util.List;

import com.example.demo.teams.model.TeamByYear;

public interface TeamByYearService {

	List<TeamByYear> findAllTeamsStats();
	List<TeamByYear> findAllTeamsStatsFiveLastYears();
}
