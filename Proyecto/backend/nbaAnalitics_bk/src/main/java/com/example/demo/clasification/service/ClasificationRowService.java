package com.example.demo.clasification.service;

import java.util.List;

import com.example.demo.clasification.model.ClasificationRow;

public interface ClasificationRowService {
	
	/**
	 * Metodo que se comunica con el mapper para obtener los datos
	 * de la clasificacion y se lo devuelve al controlador
	 * @param league: liga especificada
	 * @return la clasificación de la conferencia este
	 */
	List<ClasificationRow> getClasification(String league);
}
