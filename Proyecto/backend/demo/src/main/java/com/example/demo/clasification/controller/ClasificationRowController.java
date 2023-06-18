package com.example.demo.clasification.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.clasification.model.ClasificationRow;
import com.example.demo.clasification.service.ClasificationRowService;

@RestController
@RequestMapping("/rest/scoreboard")
public class ClasificationRowController {

	@Autowired
	ClasificationRowService esService;
	
	/**
	 * @return la clasificación de la conferencia este
	 */
	@GetMapping("/clasification")
	public List<ClasificationRow> getClasification(@RequestParam String league){
		return esService.getClasification(league);
		
	}
}
