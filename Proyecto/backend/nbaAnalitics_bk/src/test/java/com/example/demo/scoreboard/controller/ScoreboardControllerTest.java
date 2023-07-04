package com.example.demo.scoreboard.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.example.demo.clasification.controller.ClasificationRowController;
import com.example.demo.clasification.service.ClasificationRowService;

@MockitoSettings(strictness = Strictness.LENIENT)
class ScoreboardControllerTest {

	@InjectMocks
	private final ClasificationRowController controller = new ClasificationRowController();
	@Mock
	private ClasificationRowService service;

	@Test
	void getClasificationTest() {
		when(service.getClasification("NBA")).thenReturn(new ArrayList<>());
		
		assertNotNull(controller.getClasification("NBA"));
	}

}
