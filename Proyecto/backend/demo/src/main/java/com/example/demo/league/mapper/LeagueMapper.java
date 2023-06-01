package com.example.demo.league.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.league.model.League;

@Mapper
public interface LeagueMapper {

	League getLeague(String leagueName);
}
