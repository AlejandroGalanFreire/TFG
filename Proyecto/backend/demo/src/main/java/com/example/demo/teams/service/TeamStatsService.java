package com.example.demo.teams.service;

import java.util.List;

import com.example.demo.teams.model.TeamStats;
import com.example.demo.teams.model.TeamStatsByYear;

public interface TeamStatsService {

	List<TeamStats> findAllTeamsStats();
	List<TeamStatsByYear> findAllTeamsStatsFiveLastYears();
}
