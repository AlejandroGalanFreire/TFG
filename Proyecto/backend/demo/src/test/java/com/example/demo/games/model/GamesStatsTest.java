package com.example.demo.games.model;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class GamesStatsTest {

	@Test
	void test() {
		GameElem game1 = new GameElem();
		callSets(game1);
		callGets(game1);
		
		GameElem game2 = new GameElem();
		EqualsVerifier.simple().forClass(GameElem.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(GameElem.class, game1, game2)
		.verify();
		
	}

	private void callGets(GameElem game) {
		game.setSeasonId(1);
		game.setTeamId(1);
		game.setTeamAbbreviation("1");
		game.setTeamName("1");
		game.setGameId(1);
		game.setGameDate("1");
		game.setMatchup("1");
		game.setWL("1");
		game.setMin(1);
		game.setPts(1);
		game.setFgm(1);
		game.setFga(1);
		game.setFgPct(1);
		game.setFg3m(1);
		game.setFg3a(1);
		game.setFg3Pct(1);
		game.setFtm(1);
		game.setFta(1);
		game.setFtPct(1);
		game.setOreb(1);
		game.setDreb(1);
		game.setReb(1);
		game.setAst(1);
		game.setStl(1);
		game.setBlk(1);
		game.setTov(1);
		game.setPf(1);
		game.setPlusMinus(1);
		game.setPeriod1Score(1);
		game.setPeriod2Score(1);
		game.setPeriod3Score(1);
		game.setPeriod4Score(1);
	}

	private void callSets(GameElem game) {
		game.getSeasonId();
		game.getTeamId();
		game.getTeamAbbreviation();
		game.getTeamName();
		game.getGameId();
		game.getGameDate();
		game.getMatchup();
		game.getWL();
		game.getMin();
		game.getPts();
		game.getFgm();
		game.getFga();
		game.getFgPct();
		game.getFg3m();
		game.getFg3a();
		game.getFg3Pct();
		game.getFtm();
		game.getFta();
		game.getFtPct();
		game.getOreb();
		game.getDreb();
		game.getReb();
		game.getAst();
		game.getStl();
		game.getBlk();
		game.getTov();
		game.getPf();
		game.getPlusMinus();
		game.getPeriod1Score();
		game.getPeriod2Score();
		game.getPeriod3Score();
		game.getPeriod4Score();
		
	}

}
