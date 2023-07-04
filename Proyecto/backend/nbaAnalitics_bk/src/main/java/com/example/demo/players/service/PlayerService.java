package com.example.demo.players.service;

import java.util.List;

import com.example.demo.players.model.Player;

public interface PlayerService {

	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de los jugadores y se lo devuelve al controlador
	 * @return todos los jugadores y sus estadisticas avanzadas
	 */
	List<Player> findAllPlayersStats();
	
	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * del jugador especificado y se lo devuelve al controlador
	 * @param playerId
	 * @return estadisticas avanzadas del jugador especificado
	 */
	Player findPlayerStatsById(int playerId);
	
	/**
	 * Metodo que se comunica con el mapper para obtener los datos generales
	 * de los jugadores y se lo devuelve al controlador
	 * @return datos generales de todos los jugadores
	 */
	List<Player> findAllPlayersInfo();
	
	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de los jugadores de un equipo y se lo devuelve al controlador
	 * @param teamId
	 * @return todos los jugadores del equipo especificado
	 */
	List<Player> findPlayersInfoByTeamId(int teamId);

}
