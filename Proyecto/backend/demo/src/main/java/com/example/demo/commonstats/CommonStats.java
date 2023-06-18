package com.example.demo.commonstats;

public class CommonStats implements AllCommonStats{

	protected int teamId;
	protected int fgm;
	protected int fga;
	protected double fgPct;
	protected int fg3m;
	protected int fg3a;
	protected double fg3Pct;
	protected int ftm;
	protected int fta;
	protected double ftPct;
	protected int oreb;
	protected int dreb;
	protected int reb;
	protected int ast;
	protected int pf;
	protected int stl;
	protected double tov;
	protected int blk;
	protected int pts;

	@Override
	public int getTeamId() {
		return teamId;
	}

	@Override
	public void setTeamId(int id) {
		this.teamId = id;
		
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

}
