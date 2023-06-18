package com.example.demo.league.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.league.mapper.LeagueMapper;
import com.example.demo.league.model.League;

@MockitoSettings(strictness = Strictness.LENIENT)
class LeagueServiceTest {

	@InjectMocks
	private LeagueServiceImpl service;
	
	@Mock
	private LeagueMapper mapper;
	
	@Test
	void getLeagueTest() {
		when(mapper.getLeague("NBA")).thenReturn(new League());
		
		assertNotNull(service.getLeague("NBA"));
	}

}
