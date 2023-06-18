package com.example.demo.players.service;

import java.util.List;

import com.example.demo.players.model.PlayerInfo;
import com.example.demo.players.model.PlayerStats;

public interface PlayerStatsService {

	List<PlayerStats> findAllPlayersStats();
	PlayerStats findPlayerStatsById(String playerId);
	List<PlayerInfo> findAllPlayersInfo();
	List<PlayerInfo> findPlayersInfoByTeamId(String teamId);

}
