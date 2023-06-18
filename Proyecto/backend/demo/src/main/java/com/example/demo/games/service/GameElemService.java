package com.example.demo.games.service;

import java.util.List;

import com.example.demo.games.model.GameElem;

public interface GameElemService {

	List<GameElem> findAllGamesStats();
	List<GameElem> findAllGamesStatsByDate(String date);
}
