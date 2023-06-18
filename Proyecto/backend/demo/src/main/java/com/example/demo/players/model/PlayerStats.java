package com.example.demo.players.model;

import java.util.Objects;

import com.example.demo.commonstats.CommonStats;

public class PlayerStats extends CommonStats{

	private int playerId;
	private String playerName;
	private String nickname;
	private String teamAbbrev;
	private double age;
	private int gp;
	private int blka;
	private int min;
	private int won;
	private int lost;
	private double wonPct;

	public int getPlayerId() {
		return playerId;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getTeamAbbrev() {
		return teamAbbrev;
	}

	public void setTeamAbbrev(String teamAbbrev) {
		this.teamAbbrev = teamAbbrev;
	}

	public double getAge() {
		return age;
	}

	public void setAge(double age) {
		this.age = age;
	}

	public int getGp() {
		return gp;
	}

	public void setGp(int gp) {
		this.gp = gp;
	}


	public int getBlka() {
		return blka;
	}

	public void setBlka(int blka) {
		this.blka = blka;
	}

	public int getMin() {
		return min;
	}

	public void setMin(int min) {
		this.min = min;
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

	@Override
	public int hashCode() {
		return Objects.hash(age, ast, blk, blka, dreb, fg3Pct, fg3a, fg3m, fgPct, fga, fgm, ftPct, fta, ftm, gp, id,
				lost, min, nickname, oreb, pf, playerId, playerName, pts, reb, stl, teamAbbrev, teamId, tov, won,
				wonPct);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PlayerStats other = (PlayerStats) obj;
		return Double.doubleToLongBits(age) == Double.doubleToLongBits(other.age) && ast == other.ast
				&& blk == other.blk && blka == other.blka && dreb == other.dreb
				&& Double.doubleToLongBits(fg3Pct) == Double.doubleToLongBits(other.fg3Pct) && fg3a == other.fg3a
				&& fg3m == other.fg3m && Double.doubleToLongBits(fgPct) == Double.doubleToLongBits(other.fgPct)
				&& fga == other.fga && fgm == other.fgm
				&& Double.doubleToLongBits(ftPct) == Double.doubleToLongBits(other.ftPct) && fta == other.fta
				&& ftm == other.ftm && gp == other.gp && id == other.id && lost == other.lost && min == other.min
				&& Objects.equals(nickname, other.nickname) && oreb == other.oreb && pf == other.pf
				&& playerId == other.playerId && Objects.equals(playerName, other.playerName) && pts == other.pts
				&& reb == other.reb && stl == other.stl && Objects.equals(teamAbbrev, other.teamAbbrev)
				&& teamId == other.teamId && Double.doubleToLongBits(tov) == Double.doubleToLongBits(other.tov)
				&& won == other.won && Double.doubleToLongBits(wonPct) == Double.doubleToLongBits(other.wonPct);
	}

}
