package com.example.demo.scoreboard.model;

public class ElemScoreboard {
	private int id;
	private int team_id;
	private String league_id;
	private int season_id;
	private String standingsdate;
	private String conference;
	private String team;
	private int played;
	private int won;
	private int lost;
	private double won_pct;
	private String home_record;
	private String road_record;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}

	public String getLeague_id() {
		return league_id;
	}

	public void setLeague_id(String league_id) {
		this.league_id = league_id;
	}

	public int getSeason_id() {
		return season_id;
	}

	public void setSeason_id(int season_id) {
		this.season_id = season_id;
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

	public double getWon_pct() {
		return won_pct;
	}

	public void setWon_pct(double won_pct) {
		this.won_pct = won_pct;
	}

	public String getHome_record() {
		return home_record;
	}

	public void setHome_record(String home_record) {
		this.home_record = home_record;
	}

	public String getRoad_record() {
		return road_record;
	}

	public void setRoad_record(String road_record) {
		this.road_record = road_record;
	}

}
