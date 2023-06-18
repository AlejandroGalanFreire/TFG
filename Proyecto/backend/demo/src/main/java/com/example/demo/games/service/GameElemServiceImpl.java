package com.example.demo.games.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.games.mapper.GameElemMapper;
import com.example.demo.games.model.GameElem;

@Service
public class GameElemServiceImpl implements GameElemService {

	@Autowired
	private GameElemMapper gsMapper;
	
	@Override
	public List<GameElem> findAllGamesStats() {
		return gsMapper.findAllGamesStats();
	}

	@Override
	public List<GameElem> findAllGamesStatsByDate(String date) {
		return gsMapper.findAllGamesStatsByDate(date);
	}

}
