package com.example.demo.league.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class LeagueDtoTest {

	@Test
	void test() {
		LeagueDto league1 = new LeagueDto();
		callSets(league1);
		callGets(league1);

		LeagueDto league2 = new LeagueDto();
		EqualsVerifier.simple().forClass(LeagueDto.class)
				.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED,
						Warning.INHERITED_DIRECTLY_FROM_OBJECT)
				.withRedefinedSuperclass().withPrefabValues(LeagueDto.class, league1, league2).verify();

	}
	
	@Test
	void leagueToDtoTest() {
		League leagueMock = new League();
		leagueMock.setLeagueName("nba");
		leagueMock.setConferences("east, west");
		
		assertNotNull(LeagueDto.leagueToDto(leagueMock));
		assertEquals("nba", LeagueDto.leagueToDto(leagueMock).getLeagueName());
	}

	private void callSets(LeagueDto league) {
		league.setLeagueName("nba");
		league.setConferences(new String[] { "pepe", "ricardo" });

	}

	private void callGets(LeagueDto league) {
		league.getLeagueName();
		league.getConferences();

	}

}
