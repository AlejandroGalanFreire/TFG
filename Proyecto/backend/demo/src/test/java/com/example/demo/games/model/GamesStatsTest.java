package com.example.demo.games.model;

import org.junit.jupiter.api.Test;

import com.example.demo.players.model.PlayerStats;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class GamesStatsTest {

	@Test
	void test() {
		GameStats game1 = new GameStats();
		callSets(game1);
		callGets(game1);
		
		GameStats game2 = new GameStats();
		EqualsVerifier.simple().forClass(PlayerStats.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(GameStats.class, game1, game2)
		.verify();
		
	}

	private void callGets(GameStats game1) {
		game1.setId(1);
		game1.setSeasonId(1);
		game1.setTeamId(1);
		game1.setTeamAbbreviation("1");
		game1.setTeamName("1");
		game1.setGameId("1");
		game1.setGameDate("1");
		game1.setMatchup("1");
		game1.setWL("1");
		game1.setMin(1);
		game1.setPts(1);
		game1.setFgm(1);
		game1.setFga(1);
		game1.setFgPct(1);
		game1.setFg3m(1);
		game1.setFg3a(1);
		game1.setFg3Pct(1);
		game1.setFtm(1);
		game1.setFta(1);
		game1.setFtPct(1);
		game1.setOreb(1);
		game1.setDreb(1);
		game1.setReb(1);
		game1.setAst(1);
		game1.setStl(1);
		game1.setBlk(1);
		game1.setTov(1);
		game1.setPf(1);
		game1.setPlusMinus(1);
		game1.setPeriod1Score(1);
		game1.setPeriod2Score(1);
		game1.setPeriod3Score(1);
		game1.setPeriod4Score(1);
	}

	private void callSets(GameStats game1) {
		game1.getId();
		game1.getSeasonId();
		game1.getTeamId();
		game1.getTeamAbbreviation();
		game1.getTeamName();
		game1.getGameId();
		game1.getGameDate();
		game1.getMatchup();
		game1.getWL();
		game1.getMin();
		game1.getPts();
		game1.getFgm();
		game1.getFga();
		game1.getFgPct();
		game1.getFg3m();
		game1.getFg3a();
		game1.getFg3Pct();
		game1.getFtm();
		game1.getFta();
		game1.getFtPct();
		game1.getOreb();
		game1.getDreb();
		game1.getReb();
		game1.getAst();
		game1.getStl();
		game1.getBlk();
		game1.getTov();
		game1.getPf();
		game1.getPlusMinus();
		game1.getPeriod1Score();
		game1.getPeriod2Score();
		game1.getPeriod3Score();
		game1.getPeriod4Score();
		
	}

}
