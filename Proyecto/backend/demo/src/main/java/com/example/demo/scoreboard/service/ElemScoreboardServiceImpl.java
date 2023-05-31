package com.example.demo.scoreboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.scoreboard.mapper.ElemScoreboardMapper;
import com.example.demo.scoreboard.model.ElemScoreboard;

@Service
public class ElemScoreboardServiceImpl implements ElemScoreboardService {
	
	@Autowired
	private ElemScoreboardMapper esMapper;

	@Override
	public List<ElemScoreboard> getClasification(String league) {
		return esMapper.getClasification(league);
	}

}
