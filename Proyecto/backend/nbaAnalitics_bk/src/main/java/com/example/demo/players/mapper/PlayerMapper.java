package com.example.demo.players.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.players.model.Player;

@Mapper
public interface PlayerMapper {

	/**
	 * Metodo que extrae los datos de todos los jugadores de la base de datos
	 * @return todos los jugadores y sus estadisticas avanzadas
	 */
	List<Player> findAllPlayersStats();
	
	/**
	 * Metodo que extrae los datos del jugador especificado de la base de datos
	 * @param playerId
	 * @return estadisticas avanzadas del jugador especificado
	 */
	Player findPlayerStatsById(int playerId);
	
	/**
	 * Metodo que extrae los datos generales de todos los jugadores de la base de datos
	 * @return datos generales de todos los jugadores
	 */
	List<Player> findAllPlayersInfo();
	
	/**
	 * Metodo que extrae todos los jugadores de un equipo de la base de datos
	 * @param teamId
	 * @return todos los jugadores del equipo especificado
	 */
	List<Player> findPlayersInfoByTeamId(int teamId);
}
