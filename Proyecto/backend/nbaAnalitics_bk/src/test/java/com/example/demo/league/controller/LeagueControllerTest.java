package com.example.demo.league.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.league.model.League;
import com.example.demo.league.service.LeagueService;

@MockitoSettings(strictness = Strictness.LENIENT)
class LeagueControllerTest {

	@InjectMocks
	private final LeagueController controller = new LeagueController();
	@Mock
	private LeagueService service;

	@Test
	void getLeagueTest() {
		League leagueMock= new League();
		leagueMock.setLeagueName("NBA");
		leagueMock.setConferences("east, west");
		when(service.getLeague("NBA")).thenReturn(leagueMock);
		
		assertNotNull(controller.getLeague("NBA"));
	}
}
