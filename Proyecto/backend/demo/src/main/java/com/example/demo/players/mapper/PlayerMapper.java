package com.example.demo.players.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.players.model.Player;

@Mapper
public interface PlayerMapper {

	List<Player> findAllPlayersStats();
	Player findPlayerStatsById(int playerId);
	List<Player> findAllPlayersInfo();
	List<Player> findPlayersInfoByTeamId(int teamId);
}
