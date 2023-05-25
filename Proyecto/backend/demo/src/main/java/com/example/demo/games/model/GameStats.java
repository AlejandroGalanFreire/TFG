package com.example.demo.games.model;

import java.util.Objects;

public class GameStats {

	private int id;
	private int seasonId;
	private int teamId;
	private String teamAbbreviation; 
	private String teamName;
	private String gameId;
	private String gameDate;
	private String matchup;
	private String wl;
	private int min;
	private int pts;
	private int fgm; 
	private int fga; 
	private double fgPct; 
	private int fg3m;
	private int fg3a;
	private double fg3Pct; 
	private int ftm;
	private int fta;
	private double ftPct; 
	private int oreb;
	private int dreb;
	private int reb;
	private int ast;
	private int stl; 
	private int blk;
	private int tov;
	private int pf;
	private int plusMinus;
	private int period1Score;
	private int period2Score;
	private int period3Score;
	private int period4Score;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getSeasonId() {
		return seasonId;
	}
	public void setSeasonId(int seasonId) {
		this.seasonId = seasonId;
	}
	public int getTeamId() {
		return teamId;
	}
	public void setTeamId(int teamId) {
		this.teamId = teamId;
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
	public String getGameId() {
		return gameId;
	}
	public void setGameId(String gameId) {
		this.gameId = gameId;
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
	public int getPts() {
		return pts;
	}
	public void setPts(int pts) {
		this.pts = pts;
	}
	public int getFgm() {
		return fgm;
	}
	public void setFgm(int fgm) {
		this.fgm = fgm;
	}
	public int getFga() {
		return fga;
	}
	public void setFga(int fga) {
		this.fga = fga;
	}
	public double getFgPct() {
		return fgPct;
	}
	public void setFgPct(double fgPct) {
		this.fgPct = fgPct;
	}
	public int getFg3m() {
		return fg3m;
	}
	public void setFg3m(int fg3m) {
		this.fg3m = fg3m;
	}
	public int getFg3a() {
		return fg3a;
	}
	public void setFg3a(int fg3a) {
		this.fg3a = fg3a;
	}
	public double getFg3Pct() {
		return fg3Pct;
	}
	public void setFg3Pct(double fg3Pct) {
		this.fg3Pct = fg3Pct;
	}
	public int getFtm() {
		return ftm;
	}
	public void setFtm(int ftm) {
		this.ftm = ftm;
	}
	public int getFta() {
		return fta;
	}
	public void setFta(int fta) {
		this.fta = fta;
	}
	public double getFtPct() {
		return ftPct;
	}
	public void setFtPct(double ftPct) {
		this.ftPct = ftPct;
	}
	public int getOreb() {
		return oreb;
	}
	public void setOreb(int oreb) {
		this.oreb = oreb;
	}
	public int getDreb() {
		return dreb;
	}
	public void setDreb(int dreb) {
		this.dreb = dreb;
	}
	public int getReb() {
		return reb;
	}
	public void setReb(int reb) {
		this.reb = reb;
	}
	public int getAst() {
		return ast;
	}
	public void setAst(int ast) {
		this.ast = ast;
	}
	public int getStl() {
		return stl;
	}
	public void setStl(int stl) {
		this.stl = stl;
	}
	public int getBlk() {
		return blk;
	}
	public void setBlk(int blk) {
		this.blk = blk;
	}
	public int getTov() {
		return tov;
	}
	public void setTov(int tov) {
		this.tov = tov;
	}
	public int getPf() {
		return pf;
	}
	public void setPf(int pf) {
		this.pf = pf;
	}
	public int getPlusMinus() {
		return plusMinus;
	}
	public void setPlusMinus(int plusMinus) {
		this.plusMinus = plusMinus;
	}
	public int getPeriod1Score() {
		return period1Score;
	}
	public void setPeriod1Score(int period1Score) {
		this.period1Score = period1Score;
	}
	public int getPeriod2Score() {
		return period2Score;
	}
	public void setPeriod2Score(int period2Score) {
		this.period2Score = period2Score;
	}
	public int getPeriod3Score() {
		return period3Score;
	}
	public void setPeriod3Score(int period3Score) {
		this.period3Score = period3Score;
	}
	public int getPeriod4Score() {
		return period4Score;
	}
	public void setPeriod4Score(int period4Score) {
		this.period4Score = period4Score;
	}
	
	
	@Override
	public int hashCode() {
		return Objects.hash(wl, ast, blk, dreb, fg3Pct, fg3a, fg3m, fgPct, fga, fgm, ftPct, fta, ftm, gameDate,
				gameId, id, matchup, min, oreb, pf, plusMinus, pts, reb, seasonId, stl, teamAbbreviation, teamId,
				teamName, tov);
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
		return Objects.equals(wl, other.wl) && ast == other.ast && blk == other.blk && dreb == other.dreb
				&& Double.doubleToLongBits(fg3Pct) == Double.doubleToLongBits(other.fg3Pct) && fg3a == other.fg3a
				&& fg3m == other.fg3m && Double.doubleToLongBits(fgPct) == Double.doubleToLongBits(other.fgPct)
				&& fga == other.fga && fgm == other.fgm
				&& Double.doubleToLongBits(ftPct) == Double.doubleToLongBits(other.ftPct) && fta == other.fta
				&& ftm == other.ftm && Objects.equals(gameDate, other.gameDate)
				&& Objects.equals(gameId, other.gameId) && id == other.id && Objects.equals(matchup, other.matchup)
				&& min == other.min && oreb == other.oreb && pf == other.pf && plusMinus == other.plusMinus
				&& pts == other.pts && reb == other.reb && seasonId == other.seasonId && stl == other.stl
				&& Objects.equals(teamAbbreviation, other.teamAbbreviation) && teamId == other.teamId
				&& Objects.equals(teamName, other.teamName) && tov == other.tov;
	}
	
	
}
