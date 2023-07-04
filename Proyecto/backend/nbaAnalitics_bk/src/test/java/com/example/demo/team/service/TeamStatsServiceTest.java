package com.example.demo.team.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.teams.mapper.TeamByYearMapper;
import com.example.demo.teams.service.TeamByYearServiceImpl;

@MockitoSettings(strictness = Strictness.LENIENT)
class TeamStatsServiceTest {

	@InjectMocks
	private TeamByYearServiceImpl service;
	
	@Mock
	private TeamByYearMapper mapper;
	
	@Test
	void findAllTeamsStatsTest() {
		when(mapper.findAllTeamsStats()).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findAllTeamsStats());
	}
	
	@Test
	void findAllTeamsStatsFiveLastYearsTest() {
		when(mapper.findAllTeamsStatsFiveLastYears()).thenReturn(new ArrayList<>());
		
		assertNotNull(service.findAllTeamsStatsFiveLastYears());
	}
	

}
