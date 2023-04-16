package com.example.demo.players.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.players.mapper.PlayerStatsMapper;
import com.example.demo.players.model.PlayerStats;

@Service
public class PlayerStatsServiceImpl implements PlayerStatsService {

	@Autowired
	PlayerStatsMapper psMapper;
	
	@Override
	public List<PlayerStats> findAllPlayersStats() {
		return psMapper.findAllPlayersStats();
	}

}
