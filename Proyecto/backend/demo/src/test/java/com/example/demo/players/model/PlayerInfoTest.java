package com.example.demo.players.model;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class PlayerInfoTest {

	@Test
	void test() {
		PlayerInfo player1 = new PlayerInfo();
		callSets(player1);
		callGets(player1);
		
		PlayerInfo player2 = new PlayerInfo();
		EqualsVerifier.simple().forClass(PlayerInfo.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(PlayerInfo.class, player1, player2)
		.verify();
		
	}
	
	private void callSets(PlayerInfo player) {
		player.setPlayerId("1");
		player.setPlayerName("pepe");
		player.setTeamId(1);
		player.setTeamAbbrev("abbrev");
		player.setCountry("USA");
		player.setHeight("7");
		player.setWeight("188");
		player.setSeasonExp(5);
		player.setJersey("17");
		player.setPosition("B/E");
		
		
	}
	
	private void callGets(PlayerInfo player) {
		player.getPlayerId();
		player.getPlayerName();
		player.getTeamId();
		player.getTeamAbbrev();
		player.getCountry();
		player.getHeight();
		player.getWeight();
		player.getSeasonExp();
		player.getJersey();
		player.getPosition();
		
	}

}
