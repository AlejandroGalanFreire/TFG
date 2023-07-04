package com.example.demo.team.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.teams.controller.TeamByYearController;
import com.example.demo.teams.service.TeamByYearService;

@MockitoSettings(strictness = Strictness.LENIENT)
class TeamStatsControllerTest {

	@InjectMocks
	private final TeamByYearController controller = new TeamByYearController();
	@Mock
	private TeamByYearService service;

	@Test
	void getTeamsStatsTest() {
		when(service.findAllTeamsStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getTeamsStats());
	}
	
	@Test
	void getTeamsStatsFiveLastYearsTest() {
		when(service.findAllTeamsStatsFiveLastYears()).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getTeamsStatsFiveLastYears());
	}

}
