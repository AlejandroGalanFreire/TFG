package com.example.demo.scoreboard.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.scoreboard.model.ElemScoreboard;

@Mapper
public interface ElemScoreboardMapper {
	
	List<ElemScoreboard> findEastClasification();
	List<ElemScoreboard> findWestClasification();
	
}
