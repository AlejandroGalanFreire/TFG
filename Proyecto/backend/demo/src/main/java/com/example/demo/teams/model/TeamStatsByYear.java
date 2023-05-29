package com.example.demo.teams.model;

import java.util.Objects;

public class TeamStatsByYear {
	
	private int id;
	private int teamId;
	private String teamCity;
	private String teamName;
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
	private int pf;
	private int stl;
	private double tov; 
	private int blk;
	private int pts;
	private int ptsRank;
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
	public int getPf() {
		return pf;
	}
	public void setPf(int pf) {
		this.pf = pf;
	}
	public int getStl() {
		return stl;
	}
	public void setStl(int stl) {
		this.stl = stl;
	}
	public double getTov() {
		return tov;
	}
	public void setTov(double tov) {
		this.tov = tov;
	}
	public int getBlk() {
		return blk;
	}
	public void setBlk(int blk) {
		this.blk = blk;
	}
	public int getPts() {
		return pts;
	}
	public void setPts(int pts) {
		this.pts = pts;
	}
	public int getPtsRank() {
		return ptsRank;
	}
	public void setPtsRank(int ptsRank) {
		this.ptsRank = ptsRank;
	}
	@Override
	public int hashCode() {
		return Objects.hash(ast, blk, confCount, confRank, divCount, divRank, dreb, fg3Pct, fg3a, fg3m, fgPct, fga, fgm,
				ftPct, fta, ftm, gp, id, losses, nbaFinalsAppearance, oreb, pf, poLosses, poWins, pts, ptsRank, reb,
				stl, teamCity, teamId, teamName, tov, winPct, wins, year);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TeamStatsByYear other = (TeamStatsByYear) obj;
		return ast == other.ast && blk == other.blk && confCount == other.confCount && confRank == other.confRank
				&& divCount == other.divCount && divRank == other.divRank && dreb == other.dreb
				&& Double.doubleToLongBits(fg3Pct) == Double.doubleToLongBits(other.fg3Pct) && fg3a == other.fg3a
				&& fg3m == other.fg3m && Double.doubleToLongBits(fgPct) == Double.doubleToLongBits(other.fgPct)
				&& fga == other.fga && fgm == other.fgm
				&& Double.doubleToLongBits(ftPct) == Double.doubleToLongBits(other.ftPct) && fta == other.fta
				&& ftm == other.ftm && gp == other.gp && id == other.id && losses == other.losses
				&& Objects.equals(nbaFinalsAppearance, other.nbaFinalsAppearance) && oreb == other.oreb
				&& pf == other.pf && poLosses == other.poLosses && poWins == other.poWins && pts == other.pts
				&& ptsRank == other.ptsRank && reb == other.reb && stl == other.stl
				&& Objects.equals(teamCity, other.teamCity) && teamId == other.teamId
				&& Objects.equals(teamName, other.teamName)
				&& Double.doubleToLongBits(tov) == Double.doubleToLongBits(other.tov)
				&& Double.doubleToLongBits(winPct) == Double.doubleToLongBits(other.winPct) && wins == other.wins
				&& Objects.equals(year, other.year);
	}
	
	

}
