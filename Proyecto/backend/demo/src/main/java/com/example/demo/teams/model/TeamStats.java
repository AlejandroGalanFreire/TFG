package com.example.demo.teams.model;

import java.util.Objects;

public class TeamStats {

	private int id;
	private int teamId;
	private String teamName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTeamId() {
		return teamId;
	}

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, teamId, teamName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TeamStats other = (TeamStats) obj;
		return id == other.id && teamId == other.teamId && Objects.equals(teamName, other.teamName);
	}

}
