package com.example.demo.teams.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.teams.model.TeamStats;

@Mapper
public interface TeamStatsMapper {

	List<TeamStats> findAllTeamsStats();
}