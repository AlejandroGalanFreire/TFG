package com.example.demo.players.service;

import java.util.List;

import com.example.demo.players.model.Player;

public interface PlayerService {

	List<Player> findAllPlayersStats();
	Player findPlayerStatsById(int playerId);
	List<Player> findAllPlayersInfo();
	List<Player> findPlayersInfoByTeamId(int teamId);

}
