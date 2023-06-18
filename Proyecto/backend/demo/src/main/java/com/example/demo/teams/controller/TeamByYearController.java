package com.example.demo.teams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.teams.model.TeamByYear;
import com.example.demo.teams.service.TeamByYearService;

@RestController
@RequestMapping("/rest")
public class TeamByYearController {

	@Autowired
	TeamByYearService tsservice;
	
	/**
	 * @return todos los equipos y sus estadísticas en el último año
	 */
	@GetMapping("/teamstats")
	public List<TeamByYear> getTeamsStats(){
		return tsservice.findAllTeamsStats();
	}
	
	/**
	 * @return todos los equipos y sus estadísticas en los últimos 5 años
	 */
	@GetMapping("/teamstatsbyyear")
	public List<TeamByYear> getTeamsStatsFiveLastYears(){
		return tsservice.findAllTeamsStatsFiveLastYears();
	}
}
