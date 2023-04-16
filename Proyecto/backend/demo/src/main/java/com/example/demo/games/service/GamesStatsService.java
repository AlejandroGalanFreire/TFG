package com.example.demo.games.service;

import java.util.List;

import com.example.demo.games.model.GameStats;

public interface GamesStatsService {

	List<GameStats> findAllGamesStats();
	List<GameStats> findAllGamesStatsByDate(String date);
}
