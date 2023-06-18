package com.example.demo.scoreboard.model;

import org.junit.jupiter.api.Test;

import com.example.demo.clasification.model.ClasificationRow;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class ElemScoreboardTest {

	@Test
	void test() {
		ClasificationRow elem1 = new ClasificationRow();
		callSets(elem1);
		callGets(elem1);
		
		ClasificationRow elem2 = new ClasificationRow();
		EqualsVerifier.simple().forClass(ClasificationRow.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(ClasificationRow.class, elem1, elem2)
		.verify();
		
	}

	private void callSets(ClasificationRow elem) {
		elem.setId(1);
		elem.setTeamId(1);
		elem.setLeagueId("1");
		elem.setSeasonId(1);
		elem.setConference("east");
		elem.setTeam("Lakers");
		elem.setPlayed(82);
		elem.setWon(5);
		elem.setLost(1);
		elem.setWonPct(90);
		
	}
	
	private void callGets(ClasificationRow elem) {
		elem.getId();
		elem.getTeamId();
		elem.getLeagueId();
		elem.getSeasonId();
		elem.getConference();
		elem.getTeam();
		elem.getPlayed();
		elem.getWon();
		elem.getLost();
		elem.getWonPct();
		
	}

}
