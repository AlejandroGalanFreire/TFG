package com.example.demo.teams.model;

import java.util.Objects;

import com.example.demo.commonstats.CommonStats;

public class TeamByYear extends CommonStats{
	
	private String teamCity;
	private String teamName;
	private String conference;
	private String division;
	private String year;
	private int gp;
	private int wins;
	private int losses;
	private double winPct;
	private int confRank;
	private int divRank;
	private int poWins;
	private int poLosses;
	private int confCount;
	private int divCount;
	private String nbaFinalsAppearance;
	private int ptsRank;


	public String getTeamCity() {
		return teamCity;
	}

	public void setTeamCity(String teamCity) {
		this.teamCity = teamCity;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public int getGp() {
		return gp;
	}

	public void setGp(int gp) {
		this.gp = gp;
	}

	public int getWins() {
		return wins;
	}

	public void setWins(int wins) {
		this.wins = wins;
	}

	public int getLosses() {
		return losses;
	}

	public void setLosses(int losses) {
		this.losses = losses;
	}

	public double getWinPct() {
		return winPct;
	}

	public void setWinPct(double winPct) {
		this.winPct = winPct;
	}

	public int getConfRank() {
		return confRank;
	}

	public void setConfRank(int confRank) {
		this.confRank = confRank;
	}

	public int getDivRank() {
		return divRank;
	}

	public void setDivRank(int divRank) {
		this.divRank = divRank;
	}

	public int getPoWins() {
		return poWins;
	}

	public void setPoWins(int poWins) {
		this.poWins = poWins;
	}

	public int getPoLosses() {
		return poLosses;
	}

	public void setPoLosses(int poLosses) {
		this.poLosses = poLosses;
	}

	public int getConfCount() {
		return confCount;
	}

	public void setConfCount(int confCount) {
		this.confCount = confCount;
	}

	public int getDivCount() {
		return divCount;
	}

	public void setDivCount(int divCount) {
		this.divCount = divCount;
	}

	public String getNbaFinalsAppearance() {
		return nbaFinalsAppearance;
	}

	public void setNbaFinalsAppearance(String nbaFinalsAppearance) {
		this.nbaFinalsAppearance = nbaFinalsAppearance;
	}

	public int getPtsRank() {
		return ptsRank;
	}

	public void setPtsRank(int ptsRank) {
		this.ptsRank = ptsRank;
	}

	public String getConference() {
		return conference;
	}

	public void setConference(String conference) {
		this.conference = conference;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	@Override
	public int hashCode() {
		return Objects.hash(getAst(), getBlk(), confCount, confRank, conference, divCount, divRank, division, getDreb(), getFg3Pct(), getFg3a(),
				getFg3m(), getFgPct(), getFga(), getFgm(), getFtPct(), getFta(), getFtm(), gp, losses, nbaFinalsAppearance, getOreb(), getPf(), poLosses, poWins,
				getPts(), ptsRank, getReb(), getStl(), teamCity, teamId, teamName, getTov(), winPct, wins, year);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TeamByYear other = (TeamByYear) obj;
		return getAst() == other.getAst() && getBlk() == other.getBlk() && confCount == other.confCount && confRank == other.confRank
				&& Objects.equals(conference, other.conference) && divCount == other.divCount
				&& divRank == other.divRank && Objects.equals(division, other.division) && getDreb() == other.getDreb()
				&& Double.doubleToLongBits(getFg3Pct()) == Double.doubleToLongBits(other.getFg3Pct()) && getFg3a() == other.getFg3a()
				&& getFg3m() == other.getFg3m() && Double.doubleToLongBits(getFgPct()) == Double.doubleToLongBits(other.getFgPct())
				&& getFga() == other.getFga() && getFgm() == other.getFgm()
				&& Double.doubleToLongBits(getFtPct()) == Double.doubleToLongBits(other.getFtPct()) && getFta() == other.getFta()
				&& getFtm() == other.getFtm() && gp == other.gp && losses == other.losses
				&& Objects.equals(nbaFinalsAppearance, other.nbaFinalsAppearance) && getOreb() == other.getOreb()
				&& getPf() == other.getPf() && poLosses == other.poLosses && poWins == other.poWins && getPts() == other.getPts()
				&& ptsRank == other.ptsRank && getReb() == other.getReb() && getStl() == other.getStl()
				&& Objects.equals(teamCity, other.teamCity) && teamId == other.teamId
				&& Objects.equals(teamName, other.teamName)
				&& Double.doubleToLongBits(getTov()) == Double.doubleToLongBits(other.getTov())
				&& Double.doubleToLongBits(winPct) == Double.doubleToLongBits(other.winPct) && wins == other.wins
				&& Objects.equals(year, other.year);
	}

}
