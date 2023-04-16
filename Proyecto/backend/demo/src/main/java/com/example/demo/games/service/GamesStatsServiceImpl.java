package com.example.demo.games.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.games.mapper.GamesStatsMapper;
import com.example.demo.games.model.GameStats;

@Service
public class GamesStatsServiceImpl implements GamesStatsService {

	@Autowired
	private GamesStatsMapper gsMapper;
	
	@Override
	public List<GameStats> findAllGamesStats() {
		return gsMapper.findAllGamesStats();
	}

	@Override
	public List<GameStats> findAllGamesStatsByDate(String date) {
		return gsMapper.findAllGamesStatsByDate(date);
	}

}