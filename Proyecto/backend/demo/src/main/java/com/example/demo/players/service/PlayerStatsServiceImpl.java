package com.example.demo.players.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.players.mapper.PlayerStatsMapper;
import com.example.demo.players.model.PlayerInfo;
import com.example.demo.players.model.PlayerStats;

@Service
public class PlayerStatsServiceImpl implements PlayerStatsService {

	@Autowired
	PlayerStatsMapper psMapper;
	
	@Override
	public List<PlayerStats> findAllPlayersStats() {
		return psMapper.findAllPlayersStats();
	}
	
	@Override
	public List<PlayerInfo> findAllPlayersInfo(){
		return psMapper.findAllPlayersInfo();
	}

	@Override
	public PlayerStats findPlayerStatsById(String playerId) {
		return psMapper.findPlayerStatsById(playerId);
	}

	@Override
	public List<PlayerInfo> findPlayersInfoByTeamId(String teamId) {
		return psMapper.findPlayersInfoByTeamId(teamId);
	}

}
