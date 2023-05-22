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

import com.example.demo.players.service.PlayerStatsService;

@MockitoSettings(strictness = Strictness.LENIENT)
@RunWith(SpringRunner.class)
@SpringBootTest
class PlayerStatsControllerTest {
	
	@InjectMocks
	private final PlayerStatsController controller = new PlayerStatsController();
	@Mock
	private PlayerStatsService service;

	@Test
	void getPlayerStatsTest() {
		when(service.findAllPlayersStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getPlayerStats());
	}

}
