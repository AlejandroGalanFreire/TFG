package com.example.demo.players.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.players.mapper.PlayerStatsMapper;
import com.example.demo.players.model.PlayerStats;

@MockitoSettings(strictness = Strictness.LENIENT)
class PlayerStatsServiceTest {

	@InjectMocks
	private PlayerStatsServiceImpl service;

	@Mock
	private PlayerStatsMapper mapper;

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
		when(mapper.findPlayerStatsById("1")).thenReturn(new PlayerStats());
		
		assertNotNull(service.findPlayerStatsById("1"));
	}
	
	@Test
	void findPlayersInfoByTeamIdTest() {
		when(mapper.findPlayersInfoByTeamId("1")).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findPlayersInfoByTeamId("1"));
	}

}
