package com.example.demo.league.model;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class LeagueTest {

	@Test
	void test() {
		League league1 = new League();
		callSets(league1);
		callGets(league1);
		
		League league2 = new League();
		EqualsVerifier.simple().forClass(League.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(League.class, league1, league2)
		.verify();
		
	}
	
	private void callSets(League league) {
		league.setLeagueName("nba");
		league.setConferences("east");
		
		
	}
	
	private void callGets(League league) {
		league.getLeagueName();
		league.getConferences();
		
	}

}
