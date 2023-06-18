package com.example.demo.players.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.players.model.PlayerInfo;
import com.example.demo.players.model.PlayerStats;

@Mapper
public interface PlayerStatsMapper {

	List<PlayerStats> findAllPlayersStats();
	PlayerStats findPlayerStatsById(String playerId);
	List<PlayerInfo> findAllPlayersInfo();
	List<PlayerInfo> findPlayersInfoByTeamId(String teamId);
}
