package com.example.demo.players.controller;

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

import com.example.demo.players.model.Player;
import com.example.demo.players.service.PlayerService;

@MockitoSettings(strictness = Strictness.LENIENT)
@RunWith(SpringRunner.class)
@SpringBootTest
class PlayerControllerTest {
	
	@InjectMocks
	private final PlayerController controller = new PlayerController();
	@Mock
	private PlayerService service;

	@Test
	void getPlayerStatsTest() {
		when(service.findAllPlayersStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getPlayersStats());
	}
	
	@Test
	void getPlayerStatsByIdTest() {
		when(service.findPlayerStatsById(1)).thenReturn(new Player());
		
		assertNotNull(controller.getPlayerStatsById(1));
	}
	
	@Test
	void getPlayersInfoTest() {
		Player playerMock = new Player();
		playerMock.setHeight("6.6");
		playerMock.setWeight("200");
		ArrayList<Player> listMock = new ArrayList<>();
		listMock.add(playerMock);
		
		when(service.findAllPlayersInfo()).thenReturn(listMock);
		
		assertNotNull(controller.getPlayersInfo());
	}
	
	@Test
	void getPlayersInfoByTeamIdTest() {
		Player playerMock = new Player();
		playerMock.setHeight("6.6");
		playerMock.setWeight("200");
		ArrayList<Player> listMock = new ArrayList<>();
		listMock.add(playerMock);
		
		when(service.findPlayersInfoByTeamId(1)).thenReturn(listMock);
		
		assertNotNull(controller.getPlayersInfoByTeamId(1));
	}

}
