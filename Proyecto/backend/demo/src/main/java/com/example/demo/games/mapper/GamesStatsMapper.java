package com.example.demo.games.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.games.model.GameStats;
import com.example.demo.games.model.Periods;

@Mapper
public interface GamesStatsMapper {

	List<GameStats> findAllGamesStats();
	List<GameStats> findAllGamesStatsByDate(String date);
	Periods findPeriodsOfTeamInGame(int game_id, int team_id);
}
