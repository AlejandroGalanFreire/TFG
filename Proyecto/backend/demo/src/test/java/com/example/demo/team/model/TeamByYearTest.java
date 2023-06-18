package com.example.demo.team.model;

import org.junit.jupiter.api.Test;

import com.example.demo.teams.model.TeamByYear;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class TeamByYearTest {

	@Test
	void test() {
		TeamByYear team1 = new TeamByYear();
		callSets(team1);
		callGets(team1);
		
		
		TeamByYear team2 = new TeamByYear();
		EqualsVerifier.simple().forClass(TeamByYear.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(TeamByYear.class, team1, team2)
		.verify();
	}
	
	private void callSets(TeamByYear team) {
		team.setTeamId(1);
		team.setTeamCity("Orlando");
		team.setTeamName("Name");
		team.setConference("east");
		team.setDivision("atlantico");
		team.setYear("2022-23");
		team.setGp(4);
		team.setWins(2);
		team.setLosses(2);
		team.setWinPct(50);
		team.setConfRank(1);
		team.setDivRank(1);
		team.setPoWins(4);
		team.setPoLosses(1);
		team.setConfCount(1);
		team.setDivCount(1);
		team.setNbaFinalsAppearance("N/A");
		team.setFgm(2);
		team.setFga(2);
		team.setFgPct(2);
		team.setFg3a(2);
		team.setFg3m(2);
		team.setFg3Pct(2);
		team.setFta(2);
		team.setFtm(2);
		team.setFtPct(2);
		team.setOreb(2);
		team.setDreb(2);
		team.setReb(4);
		team.setAst(2);
		team.setTov(2);
		team.setStl(2);
		team.setBlk(2);
		team.setPf(2);
		team.setPts(0);
		team.setPtsRank(100);
	}
	
	private void callGets(TeamByYear team) {
		team.getTeamId();
		team.getTeamName();
		team.getTeamCity();
		team.getConference();
		team.getDivision();
		team.getYear();
		team.getGp();
		team.getWins();
		team.getLosses();
		team.getWinPct();
		team.getConfRank();
		team.getDivRank();
		team.getPoWins();
		team.getPoLosses();
		team.getConfCount();
		team.getDivCount();
		team.getNbaFinalsAppearance();
		team.getFgm();
		team.getFga();
		team.getFgPct();
		team.getFg3a();
		team.getFg3m();
		team.getFg3Pct();
		team.getFta();
		team.getFtm();
		team.getFtPct();
		team.getOreb();
		team.getDreb();
		team.getReb();
		team.getAst();
		team.getTov();
		team.getStl();
		team.getBlk();
		team.getPf();
		team.getPts();
		team.getPtsRank();
	}

}
