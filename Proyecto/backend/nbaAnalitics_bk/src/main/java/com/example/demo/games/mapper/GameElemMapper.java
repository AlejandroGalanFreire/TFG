package com.example.demo.games.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.games.model.GameElem;

@Mapper
public interface GameElemMapper {

	/**
	 * Metodo que extrae los datos de los partios de la base de datos
	 * @return todos los partidos
	 */
	List<GameElem> findAllGamesStats();
	
	/**
	 * Metodo que extrae los datos de los partios de una fecha de la base de datos
	 * @param date
	 * @return partidos de la fecha especificada
	 */
	List<GameElem> findAllGamesStatsByDate(String date);
}
