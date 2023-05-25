package com.example.demo.players.model;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class PlayerStatsTest {

	@Test
	void test() {
		PlayerStats player1 = new PlayerStats();
		callSets(player1);
		callGets(player1);
		
		PlayerStats player2 = new PlayerStats();
		EqualsVerifier.simple().forClass(PlayerStats.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(PlayerStats.class, player1, player2)
		.verify();
		
	}

	private void callSets(PlayerStats player1) {
		player1.setId(1);
		player1.setPlayerId(1);
		player1.setPlayerName("pepe");
		player1.setNickname("nickname");
		player1.setTeamId(1);
		player1.setTeamAbbrev("abbrev");
		player1.setAge(20);
		player1.setGp(6);
		player1.setWon(5);
		player1.setLost(1);
		player1.setWonPct(90);
		player1.setFgm(5);
		player1.setFga(10);
		player1.setFgPct(50);
		player1.setFg3m(5);
		player1.setFg3a(10);
		player1.setFg3Pct(50);
		player1.setFtm(5);
		player1.setFta(10);
		player1.setFtPct(50);
		player1.setOreb(5);
		player1.setDreb(5);
		player1.setReb(5);
		player1.setAst(5);
		player1.setTov(5);
		player1.setStl(5);
		player1.setBlk(5);
		player1.setBlka(5);
		player1.setPf(5);
		player1.setPts(5);
		player1.setMin(5);
		
	}
	
	private void callGets(PlayerStats player1) {
		player1.getId();
		player1.getPlayerId();
		player1.getPlayerName();
		player1.getNickname();
		player1.getTeamId();
		player1.getTeamAbbrev();
		player1.getAge();
		player1.getGp();
		player1.getWon();
		player1.getLost();
		player1.getWonPct();
		player1.getFgm();
		player1.getFga();
		player1.getFgPct();
		player1.getFg3m();
		player1.getFg3a();
		player1.getFg3Pct();
		player1.getFtm();
		player1.getFta();
		player1.getFtPct();
		player1.getOreb();
		player1.getDreb();
		player1.getReb();
		player1.getAst();
		player1.getTov();
		player1.getStl();
		player1.getBlk();
		player1.getBlka();
		player1.getPf();
		player1.getPts();
		player1.getMin();
		
	}


}
