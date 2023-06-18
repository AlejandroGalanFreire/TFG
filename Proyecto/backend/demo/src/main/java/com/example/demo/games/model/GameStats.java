package com.example.demo.games.model;

import java.util.Objects;

import com.example.demo.commonstats.CommonPeriods;

public class GameStats extends CommonPeriods {

	private int seasonId;
	private String teamAbbreviation;
	private String teamName;
	private String gameDate;
	private String matchup;
	private String wl;
	private int min;
	private int plusMinus;

	public int getSeasonId() {
		return seasonId;
	}

	public void setSeasonId(int seasonId) {
		this.seasonId = seasonId;
	}

	public String getTeamAbbreviation() {
		return teamAbbreviation;
	}

	public void setTeamAbbreviation(String teamAbbreviation) {
		this.teamAbbreviation = teamAbbreviation;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}


	public String getGameDate() {
		return gameDate;
	}

	public void setGameDate(String gameDate) {
		this.gameDate = gameDate;
	}

	public String getMatchup() {
		return matchup;
	}

	public void setMatchup(String matchup) {
		this.matchup = matchup;
	}

	public String getWL() {
		return wl;
	}

	public void setWL(String wL) {
		wl = wL;
	}

	public int getMin() {
		return min;
	}

	public void setMin(int min) {
		this.min = min;
	}

	public int getPlusMinus() {
		return plusMinus;
	}

	public void setPlusMinus(int plusMinus) {
		this.plusMinus = plusMinus;
	}

	@Override
	public int hashCode() {
		return Objects.hash(wl, getAst(), getBlk(), getDreb(), getFg3Pct(), getFg3a(), getFg3m(), getFgPct(), getFga(),
				getFgm(), getFtPct(), getFta(), getFtm(), gameDate, gameId, id, matchup, min, getOreb(), getPf(),
				plusMinus, getPts(), getReb(), seasonId, getStl(), teamAbbreviation, teamId, teamName, getTov());
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		GameStats other = (GameStats) obj;
		return Objects.equals(wl, other.wl) && getAst() == other.getAst() && getBlk() == other.getBlk()
				&& getDreb() == other.getDreb()
				&& Double.doubleToLongBits(getFg3Pct()) == Double.doubleToLongBits(other.getFg3Pct())
				&& getFg3a() == other.getFg3a() && getFg3m() == other.getFg3m()
				&& Double.doubleToLongBits(getFgPct()) == Double.doubleToLongBits(other.getFgPct())
				&& getFga() == other.getFga() && getFgm() == other.getFgm()
				&& Double.doubleToLongBits(getFtPct()) == Double.doubleToLongBits(other.getFtPct())
				&& getFta() == other.getFta() && getFtm() == other.getFtm() && Objects.equals(gameDate, other.gameDate)
				&& Objects.equals(gameId, other.gameId) && id == other.id && Objects.equals(matchup, other.matchup)
				&& min == other.min && getOreb() == other.getOreb() && getPf() == other.getPf()
				&& plusMinus == other.plusMinus && getPts() == other.getPts() && getReb() == other.getReb()
				&& seasonId == other.seasonId && getStl() == other.getStl()
				&& Objects.equals(teamAbbreviation, other.teamAbbreviation) && teamId == other.teamId
				&& Objects.equals(teamName, other.teamName) 
				&& Double.doubleToLongBits(getTov()) == Double.doubleToLongBits(other.getTov());
	}

}
