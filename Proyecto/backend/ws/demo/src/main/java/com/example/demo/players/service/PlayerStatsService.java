package com.example.demo.players.service;

import java.util.List;

import com.example.demo.players.model.PlayerStats;

public interface PlayerStatsService {

	List<PlayerStats> findAllPlayersStats();
}
