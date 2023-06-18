package com.example.demo.clasification.service;

import java.util.List;

import com.example.demo.clasification.model.ClasificationRow;

public interface ClasificationRowService {
	
	List<ClasificationRow> getClasification(String league);
}
