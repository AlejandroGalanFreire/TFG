package com.example.demo.scoreboard.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.clasification.mapper.ClasificationRowMapper;
import com.example.demo.clasification.service.ClasificationRowServiceImpl;

@MockitoSettings(strictness = Strictness.LENIENT)
class ElemScoreboardServiceTest {

	@InjectMocks
	private ClasificationRowServiceImpl service;
	
	@Mock
	private ClasificationRowMapper mapper;
	
	@Test
	void getClasificationTest() {
		when(mapper.getClasification("NBA")).thenReturn(new ArrayList<>());
		
		assertNotNull(service.getClasification("NBA"));
	}

}
