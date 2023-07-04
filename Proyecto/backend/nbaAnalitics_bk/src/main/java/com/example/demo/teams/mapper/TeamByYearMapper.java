package com.example.demo.teams.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.teams.model.TeamByYear;

@Mapper
public interface TeamByYearMapper {

	/**
	 * Metodo que extrae los datos de todos los equipos de la base de datos
	 * @return todos los equipos con sus estadisticas avanzadas
	 */
	List<TeamByYear> findAllTeamsStats();
	
	/**
	 * Metodo que extrae los datos de los ultimos 5 años de todos los equipos
	 * de la base de datos
	 * @return todos los equipos con sus estadisticas avanzadas en 
	 * los ultimos 5 años
	 */
	List<TeamByYear> findAllTeamsStatsFiveLastYears();
}
