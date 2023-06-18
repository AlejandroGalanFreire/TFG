package com.example.demo.teams.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.teams.mapper.TeamByYearMapper;
import com.example.demo.teams.model.TeamByYear;

@Service
public class TeamByYearServiceImpl implements TeamByYearService {

	@Autowired
	TeamByYearMapper tsMapper;
	
	@Override
	public List<TeamByYear> findAllTeamsStats() {
		return tsMapper.findAllTeamsStats();
	}

	@Override
	public List<TeamByYear> findAllTeamsStatsFiveLastYears() {
		return tsMapper.findAllTeamsStatsFiveLastYears();
	}

}
