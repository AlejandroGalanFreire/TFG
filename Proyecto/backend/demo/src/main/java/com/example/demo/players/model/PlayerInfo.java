package com.example.demo.players.model;

import java.util.Objects;

public class PlayerInfo {

	private String playerId;
	private String playerName;
	private String country;
	private String height;
	private String weight;
	private int seasonExp;
	private String jersey;
	private String position;
	private String teamAbbrev;
	private int teamId;

	public String getPlayerId() {
		return playerId;
	}

	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public int getSeasonExp() {
		return seasonExp;
	}

	public void setSeasonExp(int seasonExp) {
		this.seasonExp = seasonExp;
	}

	public String getJersey() {
		return jersey;
	}

	public void setJersey(String jersey) {
		this.jersey = jersey;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getTeamAbbrev() {
		return teamAbbrev;
	}

	public void setTeamAbbrev(String teamAbbrev) {
		this.teamAbbrev = teamAbbrev;
	}

	public int getTeamId() {
		return teamId;
	}

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(country, height, jersey, playerId, playerName, position, seasonExp, teamAbbrev, teamId,
				weight);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PlayerInfo other = (PlayerInfo) obj;
		return Objects.equals(country, other.country) && Objects.equals(height, other.height)
				&& Objects.equals(jersey, other.jersey) && Objects.equals(playerId, other.playerId)
				&& Objects.equals(playerName, other.playerName) && Objects.equals(position, other.position)
				&& seasonExp == other.seasonExp && Objects.equals(teamAbbrev, other.teamAbbrev)
				&& teamId == other.teamId && Objects.equals(weight, other.weight);
	}

}
