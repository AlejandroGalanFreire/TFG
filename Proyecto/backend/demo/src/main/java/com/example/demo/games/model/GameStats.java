package com.example.demo.games.model;

import java.util.Objects;

public class GameStats {

	private int id;
	private int season_id;
	private int team_id;
	private String team_abbreviation; 
	private String team_name;
	private String game_id;
	private String game_date;
	private String matchup;
	private String WL;
	private int min;
	private int pts;
	private int fgm; 
	private int fga; 
	private double fg_pct; 
	private int fg3m;
	private int fg3a;
	private double fg3_pct; 
	private int ftm;
	private int fta;
	private double ft_pct; 
	private int oreb;
	private int dreb;
	private int reb;
	private int ast;
	private int stl; 
	private int blk;
	private int tov;
	private int pf;
	private int plus_minus;
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
	public int getSeason_id() {
		return season_id;
	}
	public void setSeason_id(int season_id) {
		this.season_id = season_id;
	}
	public int getTeam_id() {
		return team_id;
	}
	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}
	public String getTeam_abbreviation() {
		return team_abbreviation;
	}
	public void setTeam_abbreviation(String team_abbreviation) {
		this.team_abbreviation = team_abbreviation;
	}
	public String getTeam_name() {
		return team_name;
	}
	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}
	public String getGame_id() {
		return game_id;
	}
	public void setGame_id(String game_id) {
		this.game_id = game_id;
	}
	public String getGame_date() {
		return game_date;
	}
	public void setGame_date(String game_date) {
		this.game_date = game_date;
	}
	public String getMatchup() {
		return matchup;
	}
	public void setMatchup(String matchup) {
		this.matchup = matchup;
	}
	public String getWL() {
		return WL;
	}
	public void setWL(String wL) {
		WL = wL;
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
	public double getFg_pct() {
		return fg_pct;
	}
	public void setFg_pct(double fg_pct) {
		this.fg_pct = fg_pct;
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
	public double getFg3_pct() {
		return fg3_pct;
	}
	public void setFg3_pct(double fg3_pct) {
		this.fg3_pct = fg3_pct;
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
	public double getFt_pct() {
		return ft_pct;
	}
	public void setFt_pct(double ft_pct) {
		this.ft_pct = ft_pct;
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
	public int getPlus_minus() {
		return plus_minus;
	}
	public void setPlus_minus(int plus_minus) {
		this.plus_minus = plus_minus;
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
		return Objects.hash(WL, ast, blk, dreb, fg3_pct, fg3a, fg3m, fg_pct, fga, fgm, ft_pct, fta, ftm, game_date,
				game_id, id, matchup, min, oreb, pf, plus_minus, pts, reb, season_id, stl, team_abbreviation, team_id,
				team_name, tov);
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
		return Objects.equals(WL, other.WL) && ast == other.ast && blk == other.blk && dreb == other.dreb
				&& Double.doubleToLongBits(fg3_pct) == Double.doubleToLongBits(other.fg3_pct) && fg3a == other.fg3a
				&& fg3m == other.fg3m && Double.doubleToLongBits(fg_pct) == Double.doubleToLongBits(other.fg_pct)
				&& fga == other.fga && fgm == other.fgm
				&& Double.doubleToLongBits(ft_pct) == Double.doubleToLongBits(other.ft_pct) && fta == other.fta
				&& ftm == other.ftm && Objects.equals(game_date, other.game_date)
				&& Objects.equals(game_id, other.game_id) && id == other.id && Objects.equals(matchup, other.matchup)
				&& min == other.min && oreb == other.oreb && pf == other.pf && plus_minus == other.plus_minus
				&& pts == other.pts && reb == other.reb && season_id == other.season_id && stl == other.stl
				&& Objects.equals(team_abbreviation, other.team_abbreviation) && team_id == other.team_id
				&& Objects.equals(team_name, other.team_name) && tov == other.tov;
	}
	
	
}
