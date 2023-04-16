package com.example.demo.scoreboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.scoreboard.model.ElemScoreboard;
import com.example.demo.scoreboard.service.ElemScoreboardService;

@RestController
@RequestMapping("/rest/scoreboard")
public class ScoreboardController {

	@Autowired
	ElemScoreboardService esService;
	
	/**
	 * @return la clasificación de la conferencia este
	 */
	@GetMapping("/east")
	public List<ElemScoreboard> getEastScoreboard(){
		return esService.findEastClasification();
		
	}
	
	/**
	 * @return la clasificación de la conferencia oeste
	 */
	@GetMapping("/west")
	public List<ElemScoreboard> getWestScoreboard(){
		return esService.findWestClasification();
		
	}
}
