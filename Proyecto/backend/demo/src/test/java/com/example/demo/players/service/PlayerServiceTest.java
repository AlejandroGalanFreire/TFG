package com.example.demo.players.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.players.mapper.PlayerMapper;
import com.example.demo.players.model.Player;

@MockitoSettings(strictness = Strictness.LENIENT)
class PlayerServiceTest {

	@InjectMocks
	private PlayerServiceImpl service;

	@Mock
	private PlayerMapper mapper;

	@Test
	void findAllPlayersStatsTest() {
		when(mapper.findAllPlayersStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findAllPlayersStats());
	}

	@Test
	void findAllPlayersInfoTest() {
		when(mapper.findAllPlayersInfo()).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findAllPlayersInfo());
	}

	@Test
	void findPeriodsOfTeamInGameTest() {
		when(mapper.findPlayerStatsById(1)).thenReturn(new Player());
		
		assertNotNull(service.findPlayerStatsById(1));
	}
	
	@Test
	void findPlayersInfoByTeamIdTest() {
		when(mapper.findPlayersInfoByTeamId(1)).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findPlayersInfoByTeamId(1));
	}

}
