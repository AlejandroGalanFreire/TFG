package com.example.demo.teams.model;

import java.util.Objects;

public class TeamStats {
	
	private int idTeamsStats;
	private String teamId;
	private String teamName; 
	private double min;
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
	private double tov; 
	private int stl;
	private int blk; 
	private int blka; 
	private int pf;
	private int pts;
	public int getIdTeamsStats() {
		return idTeamsStats;
	}
	public void setIdTeamsStats(int idTeamsStats) {
		this.idTeamsStats = idTeamsStats;
	}
	public String getTeamId() {
		return teamId;
	}
	public void setTeamId(String teamId) {
		this.teamId = teamId;
	}
	public String getTeamName() {
		return teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	public double getMin() {
		return min;
	}
	public void setMin(double min) {
		this.min = min;
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
	public double getTov() {
		return tov;
	}
	public void setTov(double tov) {
		this.tov = tov;
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
	public int getBlka() {
		return blka;
	}
	public void setBlka(int blka) {
		this.blka = blka;
	}
	public int getPf() {
		return pf;
	}
	public void setPf(int pf) {
		this.pf = pf;
	}
	public int getPts() {
		return pts;
	}
	public void setPts(int pts) {
		this.pts = pts;
	}
	@Override
	public int hashCode() {
		return Objects.hash(ast, blk, blka, dreb, fg3Pct, fg3a, fg3m, fgPct, fga, fgm, ftPct, fta, ftm, idTeamsStats,
				min, oreb, pf, pts, reb, stl, teamId, teamName, tov);
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
		return ast == other.ast && blk == other.blk && blka == other.blka && dreb == other.dreb
				&& Double.doubleToLongBits(fg3Pct) == Double.doubleToLongBits(other.fg3Pct) && fg3a == other.fg3a
				&& fg3m == other.fg3m && Double.doubleToLongBits(fgPct) == Double.doubleToLongBits(other.fgPct)
				&& fga == other.fga && fgm == other.fgm
				&& Double.doubleToLongBits(ftPct) == Double.doubleToLongBits(other.ftPct) && fta == other.fta
				&& ftm == other.ftm && idTeamsStats == other.idTeamsStats
				&& Double.doubleToLongBits(min) == Double.doubleToLongBits(other.min) && oreb == other.oreb
				&& pf == other.pf && pts == other.pts && reb == other.reb && stl == other.stl
				&& Objects.equals(teamId, other.teamId) && Objects.equals(teamName, other.teamName)
				&& Double.doubleToLongBits(tov) == Double.doubleToLongBits(other.tov);
	}
	
	
}
