package com.example.demo.league.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.league.mapper.LeagueMapper;
import com.example.demo.league.model.League;

@Service
public class LeagueServiceImpl implements LeagueService {
	
	@Autowired
	private LeagueMapper mapper;

	@Override
	public League getLeague(String leagueName) {
		return mapper.getLeague(leagueName);
	}

}
