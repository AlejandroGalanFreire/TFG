package com.example.demo.clasification.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.clasification.model.ClasificationRow;

@Mapper
public interface ClasificationRowMapper {
	
	/**
	 * Metodo que extrae los datos de la clasificacion de la base de datos
	 * @param league: liga especificada
	 * @return la clasificación de la conferencia este
	 */
	List<ClasificationRow> getClasification(String league);
	
}
