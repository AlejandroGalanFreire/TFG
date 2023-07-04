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

import com.example.demo.games.model.GameElem;
import com.example.demo.games.service.GameElemService;

@MockitoSettings(strictness = Strictness.LENIENT)
@RunWith(SpringRunner.class)
@SpringBootTest
class GameElemControllerTest {
	
	@InjectMocks
	private final GameElemController controller = new GameElemController();
	@Mock
	private GameElemService service;

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
		ArrayList<GameElem> mockedList = new ArrayList<>();
		
		GameElem game1 = new GameElem();
		game1.setGameId(1);
		game1.setTeamId(1);
		game1.setTeamAbbreviation("1");
		game1.setMatchup("1@2");
		mockedList.add(game1);
		
		GameElem game2 = new GameElem();
		game2.setGameId(2);
		game2.setTeamId(2);
		game2.setTeamAbbreviation("2");
		game2.setMatchup("1@2");
		mockedList.add(game2);
		
		when(service.findAllGamesStatsByDate("04/09/2023"))
		.thenReturn(mockedList);
		
		assertNotNull(controller.getGamesStatsByDate("04/09/2023"));
	}

}
