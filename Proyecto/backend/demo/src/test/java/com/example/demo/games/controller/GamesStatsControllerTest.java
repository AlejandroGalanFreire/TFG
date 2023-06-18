package com.example.demo.games.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.games.model.GameStats;
import com.example.demo.games.model.Periods;
import com.example.demo.games.service.GamesStatsService;

@MockitoSettings(strictness = Strictness.LENIENT)
@RunWith(SpringRunner.class)
@SpringBootTest
class GamesStatsControllerTest {
	
	@InjectMocks
	private final GamesStatsController controller = new GamesStatsController();
	@Mock
	private GamesStatsService service;

	@Test
	void getGamesStatsTest() {
		when(service.findAllGamesStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getGamesStats());
	}
	
	@Test
	void getGamesStatsByDateNotDataTest() {
		when(service.findAllGamesStatsByDate("04/09/2023")).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getGamesStatsByDate("04/09/2023"));
	}
	
	@Test
	void getGamesStatsByDateWithDataTest() {
		ArrayList<GameStats> mockedList = new ArrayList<>();
		
		GameStats game1 = new GameStats();
		game1.setGameId(1);
		game1.setTeamId(1);
		game1.setTeamAbbreviation("1");
		game1.setMatchup("1@2");
		mockedList.add(game1);
		Periods mockedPeriod1 = new Periods();
		mockedPeriod1.setGameId(game1.getGameId());
		mockedPeriod1.setTeamId(game1.getTeamId());
		mockedPeriod1.setPeriod1Score(5);
		mockedPeriod1.setPeriod2Score(5);
		mockedPeriod1.setPeriod3Score(5);
		mockedPeriod1.setPeriod4Score(5);
		
		GameStats game2 = new GameStats();
		game2.setGameId(2);
		game2.setTeamId(2);
		game2.setTeamAbbreviation("2");
		game2.setMatchup("1@2");
		mockedList.add(game2);
		Periods mockedPeriod2 = new Periods();
		mockedPeriod2.setGameId(game2.getGameId());
		mockedPeriod2.setTeamId(game2.getTeamId());
		mockedPeriod2.setPeriod1Score(5);
		mockedPeriod2.setPeriod2Score(5);
		mockedPeriod2.setPeriod3Score(5);
		mockedPeriod2.setPeriod4Score(5);
		
		when(service.findPeriodsOfTeamInGame(game1.getGameId(), game1.getTeamId()))
		.thenReturn(mockedPeriod1);
		
		when(service.findPeriodsOfTeamInGame(game2.getGameId(), game2.getTeamId()))
		.thenReturn(mockedPeriod2);
		
		when(service.findAllGamesStatsByDate("04/09/2023"))
		.thenReturn(mockedList);
		
		assertNotNull(controller.getGamesStatsByDate("04/09/2023"));
	}

}
