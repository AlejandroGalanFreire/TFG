package com.example.demo.games.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.games.mapper.GameElemMapper;

@MockitoSettings(strictness = Strictness.LENIENT)
class GameStatsServiceTest {

	@InjectMocks
	private GameElemServiceImpl service;
	
	@Mock
	private GameElemMapper mapper;
	
	@Test
	void findAllGamesStatsTest() {
		when(mapper.findAllGamesStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findAllGamesStats());
	}
	
	@Test
	void findAllGamesStatsByDateTest() {
		when(mapper.findAllGamesStatsByDate("9/04/23")).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findAllGamesStatsByDate("9/04/23"));
	}
	

}
