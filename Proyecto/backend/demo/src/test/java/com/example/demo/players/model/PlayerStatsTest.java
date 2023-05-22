package com.example.demo.players.model;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class PlayerStatsTest {

	@Test
	void test() {
		PlayerStats player = new PlayerStats();
		player.setId(1);
		player.getId();
		PlayerStats player2 = new PlayerStats();
		player2.setId(2);
		EqualsVerifier.simple().forClass(PlayerStats.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(PlayerStats.class, player, player2)
		.verify();
		
	}

}
