package com.example.demo.players.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.players.model.PlayerStats;
import com.example.demo.players.service.PlayerStatsService;

@RestController
@RequestMapping("/rest")
public class PlayerStatsController {

	@Autowired
	PlayerStatsService psService;
	
	/**
	 * @return todos los jugadores y sus estadísticas
	 */
	@GetMapping("/playerstats")
	public List<PlayerStats> getTeamsStats(){
		return psService.findAllPlayersStats();
	}
}
