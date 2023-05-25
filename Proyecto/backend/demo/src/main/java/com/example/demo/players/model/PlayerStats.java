package com.example.demo.players.model;

import java.util.Objects;

public class PlayerStats {

	private int id;
	private int playerId;
	private String playerName;
	private String nickname;
	private int teamId;
	private String teamAbbrev; 
	private double age;
	private int gp;
	private int won;
	private int lost;
	private double wonPct;
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
	private int min;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public int getTeamId() {
		return teamId;
	}
	public void setTeamId(int teamId) {
		this.teamId = teamId;
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
	public int getMin() {
		return min;
	}
	public void setMin(int min) {
		this.min = min;
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
