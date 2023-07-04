package com.example.demo.league.model;

import java.util.Objects;

public class League {

	private String leagueName;
	private String conferences;

	public String getLeagueName() {
		return leagueName;
	}

	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}

	public String getConferences() {
		return conferences;
	}

	public void setConferences(String conferences) {
		this.conferences = conferences;
	}

	@Override
	public int hashCode() {
		return Objects.hash(conferences, leagueName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		League other = (League) obj;
		return Objects.equals(conferences, other.conferences) && Objects.equals(leagueName, other.leagueName);
	}

}
