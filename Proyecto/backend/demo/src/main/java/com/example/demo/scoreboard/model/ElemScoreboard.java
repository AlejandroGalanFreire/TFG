package com.example.demo.scoreboard.model;

public class ElemScoreboard {
	private int id;
	private int teamId;
	private String leagueId;
	private int seasonId;
	private String standingsdate;
	private String conference;
	private String team;
	private int played;
	private int won;
	private int lost;
	private double wonPct;
	private String homeRecord;
	private String roadRecord;

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

	public String getLeagueId() {
		return leagueId;
	}

	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}

	public int getSeasonId() {
		return seasonId;
	}

	public void setSeasonId(int seasonId) {
		this.seasonId = seasonId;
	}

	public String getStandingsdate() {
		return standingsdate;
	}

	public void setStandingsdate(String standingsdate) {
		this.standingsdate = standingsdate;
	}

	public String getConference() {
		return conference;
	}

	public void setConference(String conference) {
		this.conference = conference;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public int getPlayed() {
		return played;
	}

	public void setPlayed(int played) {
		this.played = played;
	}

	public int getWon() {
		return won;
	}

	public void setWon(int won) {
		this.won = won;
	}

	public int getLost() {
		return lost;
	}

	public void setLost(int lost) {
		this.lost = lost;
	}

	public double getWonPct() {
		return wonPct;
	}

	public void setWonPct(double wonPct) {
		this.wonPct = wonPct;
	}

	public String getHomeRecord() {
		return homeRecord;
	}

	public void setHomeRecord(String homeRecord) {
		this.homeRecord = homeRecord;
	}

	public String getRoadRecord() {
		return roadRecord;
	}

	public void setRoadRecord(String roadRecord) {
		this.roadRecord = roadRecord;
	}

}
