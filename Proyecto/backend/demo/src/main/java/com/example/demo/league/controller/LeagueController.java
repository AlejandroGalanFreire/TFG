package com.example.demo.league.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.league.model.LeagueDto;
import com.example.demo.league.service.LeagueService;

@RestController
@RequestMapping("/rest")
public class LeagueController {

	@Autowired
	LeagueService ls;
	
	/**
	 * @return la liga que tiene el nombre recibido
	 */
	@GetMapping("/league")
	public LeagueDto getLeague(@RequestParam String leagueName){
		return LeagueDto.leagueToDto(ls.getLeague(leagueName));
		
	}
}
