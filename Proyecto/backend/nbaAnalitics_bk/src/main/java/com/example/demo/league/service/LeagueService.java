package com.example.demo.league.service;

import com.example.demo.league.model.League;

public interface LeagueService {

	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de la liga especificada y se lo devuelve al controlador
	 * @param leagueName
	 * @return los datos de la liga especificada
	 */
	League getLeague(String leagueName);
}
