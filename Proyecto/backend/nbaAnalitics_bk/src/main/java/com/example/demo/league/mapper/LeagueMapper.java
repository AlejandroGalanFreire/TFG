package com.example.demo.league.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.league.model.League;

@Mapper
public interface LeagueMapper {

	/**
	 * Metodo que extrae los datos de la liga de la base de datos
	 * @param leagueName
	 * @return los datos de la liga especificada
	 */
	League getLeague(String leagueName);
}
