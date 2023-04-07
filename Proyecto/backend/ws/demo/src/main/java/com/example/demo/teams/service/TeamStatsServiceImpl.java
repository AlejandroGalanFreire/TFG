package com.example.demo.teams.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.teams.mapper.TeamStatsMapper;
import com.example.demo.teams.model.TeamStats;

@Service
public class TeamStatsServiceImpl implements TeamStatsService {

	@Autowired
	TeamStatsMapper tsMapper;
	
	@Override
	public List<TeamStats> findAllTeamsStats() {
		return tsMapper.findAllTeamsStats();
	}

}
