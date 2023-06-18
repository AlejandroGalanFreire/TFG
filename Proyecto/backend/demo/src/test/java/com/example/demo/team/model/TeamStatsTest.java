package com.example.demo.team.model;

import org.junit.jupiter.api.Test;

import com.example.demo.teams.model.TeamStats;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class TeamStatsTest {

	@Test
	void test() {
		TeamStats team1 = new TeamStats();
		callSets(team1);
		callGets(team1);
		
		
		TeamStats team2 = new TeamStats();
		EqualsVerifier.simple().forClass(TeamStats.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(TeamStats.class, team1, team2)
		.verify();
	}
	
	private void callSets(TeamStats team) {
		team.setId(1);
		team.setTeamId(1);
		team.setTeamName("Name");
	}
	
	private void callGets(TeamStats team) {
		team.getId();
		team.getTeamId();
		team.getTeamName();
	}

}
