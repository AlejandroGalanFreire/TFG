package com.example.demo.games.model;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

class PeriodsTest {

	@Test
	void test() {
		Periods period1 = new Periods();
		callSets(period1);
		callGets(period1);
		
		Periods period2 = new Periods();
		EqualsVerifier.simple().forClass(Periods.class)
		.suppress(Warning.STRICT_INHERITANCE, Warning.ALL_NONFINAL_FIELDS_SHOULD_BE_USED, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
		.withRedefinedSuperclass()
		.withPrefabValues(Periods.class, period1, period2)
		.verify();
		
	}

	private void callGets(Periods period) {
		period.setTeamId(1);
		period.setGameId(1);
		period.setPeriod1Score(1);
		period.setPeriod2Score(1);
		period.setPeriod3Score(1);
		period.setPeriod4Score(1);
	}

	private void callSets(Periods period) {
		period.getTeamId();
		period.getGameId();
		period.getPeriod1Score();
		period.getPeriod2Score();
		period.getPeriod3Score();
		period.getPeriod4Score();
		
	}

}
