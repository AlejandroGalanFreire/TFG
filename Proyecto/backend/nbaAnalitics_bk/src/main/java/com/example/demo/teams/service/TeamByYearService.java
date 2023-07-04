package com.example.demo.teams.service;

import java.util.List;

import com.example.demo.teams.model.TeamByYear;

public interface TeamByYearService {

	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de los equipos y se lo devuelve al controlador
	 * @return todos los equipos con sus estadisticas avanzadas
	 */
	List<TeamByYear> findAllTeamsStats();
	
	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de todos los equipos en los ultimos 5 años y se lo devuelve 
	 * al controlador
	 * @return todos los equipos con sus estadisticas avanzadas en 
	 * los ultimos 5 años
	 */
	List<TeamByYear> findAllTeamsStatsFiveLastYears();
}
