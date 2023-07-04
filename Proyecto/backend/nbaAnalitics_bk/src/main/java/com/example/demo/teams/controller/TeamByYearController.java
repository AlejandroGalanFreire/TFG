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
	 * Metodo que inicia la transaccion para obtener todos los equipos y sus estadisticas avanzadas
	 * @return todos los equipos y sus estadisticas en el último año
	 */
	@GetMapping("/teamstats")
	public List<TeamByYear> getTeamsStats(){
		return tsservice.findAllTeamsStats();
	}
	
	/**
	 * etodo que inicia la transaccion para obtener todos los equipos y sus estadisticas avanzadas 
	 * en los ultimos 5 años
	 * @return todos los equipos y sus estadísticas en los últimos 5 años
	 */
	@GetMapping("/teamstatsbyyear")
	public List<TeamByYear> getTeamsStatsFiveLastYears(){
		return tsservice.findAllTeamsStatsFiveLastYears();
	}
}
