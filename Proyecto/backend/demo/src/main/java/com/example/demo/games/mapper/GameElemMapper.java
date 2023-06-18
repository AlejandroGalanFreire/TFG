package com.example.demo.games.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.games.model.GameElem;

@Mapper
public interface GameElemMapper {

	List<GameElem> findAllGamesStats();
	List<GameElem> findAllGamesStatsByDate(String date);
}
