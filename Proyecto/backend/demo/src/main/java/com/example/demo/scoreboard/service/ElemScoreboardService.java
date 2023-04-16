package com.example.demo.scoreboard.service;

import java.util.List;

import com.example.demo.scoreboard.model.ElemScoreboard;

public interface ElemScoreboardService {
	
	List<ElemScoreboard> findEastClasification();
	List<ElemScoreboard> findWestClasification();
}
