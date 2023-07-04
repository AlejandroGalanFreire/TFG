package com.example.demo.games.service;

import java.util.List;

import com.example.demo.games.model.GameElem;

public interface GameElemService {

	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de todos los partidos y se lo devuelve al controlador
	 * @return todos los partidos
	 */
	List<GameElem> findAllGamesStats();
	
	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de de los partidos en una fecha concreta y se lo devuelve al controlador
	 * @param date
	 * @return partidos de la fecha especificada
	 */
	List<GameElem> findAllGamesStatsByDate(String date);
}
