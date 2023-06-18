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

	private void callSets(PlayerStats player) {
		player.setId(1);
		player.setPlayerId(1);
		player.setPlayerName("pepe");
		player.setNickname("nickname");
		player.setTeamId(1);
		player.setTeamAbbrev("abbrev");
		player.setAge(20);
		player.setGp(6);
		player.setWon(5);
		player.setLost(1);
		player.setWonPct(90);
		player.setFgm(5);
		player.setFga(10);
		player.setFgPct(50);
		player.setFg3m(5);
		player.setFg3a(10);
		player.setFg3Pct(50);
		player.setFtm(5);
		player.setFta(10);
		player.setFtPct(50);
		player.setOreb(5);
		player.setDreb(5);
		player.setReb(5);
		player.setAst(5);
		player.setTov(5);
		player.setStl(5);
		player.setBlk(5);
		player.setBlka(5);
		player.setPf(5);
		player.setPts(5);
		player.setMin(5);
		
	}
	
	private void callGets(PlayerStats player) {
		player.getId();
		player.getPlayerId();
		player.getPlayerName();
		player.getNickname();
		player.getTeamId();
		player.getTeamAbbrev();
		player.getAge();
		player.getGp();
		player.getWon();
		player.getLost();
		player.getWonPct();
		player.getFgm();
		player.getFga();
		player.getFgPct();
		player.getFg3m();
		player.getFg3a();
		player.getFg3Pct();
		player.getFtm();
		player.getFta();
		player.getFtPct();
		player.getOreb();
		player.getDreb();
		player.getReb();
		player.getAst();
		player.getTov();
		player.getStl();
		player.getBlk();
		player.getBlka();
		player.getPf();
		player.getPts();
		player.getMin();
		
	}


}
