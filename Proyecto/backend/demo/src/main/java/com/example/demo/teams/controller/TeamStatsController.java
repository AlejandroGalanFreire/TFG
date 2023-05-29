package com.example.demo.teams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.teams.model.TeamStats;
import com.example.demo.teams.model.TeamStatsByYear;
import com.example.demo.teams.service.TeamStatsService;

@RestController
@RequestMapping("/rest")
public class TeamStatsController {

	@Autowired
	TeamStatsService tsservice;
	
	/**
	 * @return todos los equipos y sus estadísticas
	 */
	@GetMapping("/teamstats")
	public List<TeamStats> getTeamsStats(){
		return tsservice.findAllTeamsStats();
	}
	
	/**
	 * @return todos los equipos y sus estadísticas en los últimos 5 años
	 */
	@GetMapping("/teamstatsbyyear")
	public List<TeamStatsByYear> getTeamsStatsFiveLastYears(){
		return tsservice.findAllTeamsStatsFiveLastYears();
	}
}
