package com.example.demo.teams.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.teams.model.TeamByYear;

@Mapper
public interface TeamByYearMapper {

	List<TeamByYear> findAllTeamsStats();
	List<TeamByYear> findAllTeamsStatsFiveLastYears();
}
