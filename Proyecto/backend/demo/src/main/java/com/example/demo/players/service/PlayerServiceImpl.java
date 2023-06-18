package com.example.demo.players.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.players.mapper.PlayerMapper;
import com.example.demo.players.model.Player;

@Service
public class PlayerServiceImpl implements PlayerService {

	@Autowired
	PlayerMapper psMapper;
	
	@Override
	public List<Player> findAllPlayersStats() {
		return psMapper.findAllPlayersStats();
	}
	
	@Override
	public List<Player> findAllPlayersInfo(){
		return psMapper.findAllPlayersInfo();
	}

	@Override
	public Player findPlayerStatsById(int playerId) {
		return psMapper.findPlayerStatsById(playerId);
	}

	@Override
	public List<Player> findPlayersInfoByTeamId(int teamId) {
		return psMapper.findPlayersInfoByTeamId(teamId);
	}

}
