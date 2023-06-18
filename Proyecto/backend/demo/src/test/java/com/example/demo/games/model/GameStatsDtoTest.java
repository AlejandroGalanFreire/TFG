package com.example.demo.games.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class GameStatsDtoTest {

	@Test
	void test() {
		GameStatsDto game1 = new GameStatsDto();
		callSets(game1);
		callGets(game1);
		
		GameStatsDto game2 = new GameStatsDto();
		EqualsVerifier.simple().forClass(GameStatsDto.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(GameStatsDto.class, game1, game2)
		.verify();
		
	}
	
	@Test
	void gamesStatsArrayToDtoTest() {
		GameStats elemMock1 = new GameStats();
		elemMock1.setId(1);
		GameStats elemMock2 = new GameStats();
		elemMock2.setId(2);
		GameStats[] arrayMock = new GameStats[] {elemMock1, elemMock2};
		ArrayList<GameStats[]> listMock = new ArrayList<>();
		listMock.add(arrayMock);
		
		assertNotNull(GameStatsDto.gamesStatsArrayToDto(listMock));
		assertEquals(1, GameStatsDto.gamesStatsArrayToDto(listMock).get(0)[0].getId());
		assertEquals(2, GameStatsDto.gamesStatsArrayToDto(listMock).get(0)[1].getId());
		
	}

	private void callGets(GameStatsDto game) {
		game.setId(1);
		game.setSeasonId(1);
		game.setTeamId(1);
		game.setTeamAbbreviation("1");
		game.setTeamName("1");
		game.setGameId(1);
		game.setFgPct(1);
		game.setFg3Pct(1);
		game.setFtPct(1);
		game.setReb(1);
		game.setAst(1);
		game.setStl(1);
		game.setBlk(1);
		game.setTov(1);
		game.setPf(1);
		game.setPeriod1Score(1);
		game.setPeriod2Score(1);
		game.setPeriod3Score(1);
		game.setPeriod4Score(1);
	}

	private void callSets(GameStatsDto game) {
		game.getId();
		game.getSeasonId();
		game.getTeamId();
		game.getTeamAbbreviation();
		game.getTeamName();
		game.getGameId();
		game.getFgPct();
		game.getFg3Pct();
		game.getFtPct();
		game.getReb();
		game.getAst();
		game.getStl();
		game.getBlk();
		game.getTov();
		game.getPf();
		game.getPeriod1Score();
		game.getPeriod2Score();
		game.getPeriod3Score();
		game.getPeriod4Score();
		
	}
}
