package com.example.demo.games.model;

import java.util.ArrayList;
import java.util.List;

public class GameStatsDto {

	private int id;
	private int seasonId;
	private int teamId;
	private String teamAbbreviation; 
	private String teamName;
	private int gameId;
	private double fgPct;
	private double fg3Pct;
	private double ftPct;
	private int reb;
	private int ast;
	private int stl; 
	private int blk;
	private double tov;
	private int pf;
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
	public int getGameId() {
		return gameId;
	}
	public void setGameId(int gameId) {
		this.gameId = gameId;
	}
	public double getFgPct() {
		return fgPct;
	}
	public void setFgPct(double fgPct) {
		this.fgPct = fgPct;
	}
	public double getFg3Pct() {
		return fg3Pct;
	}
	public void setFg3Pct(double fg3Pct) {
		this.fg3Pct = fg3Pct;
	}
	public double getFtPct() {
		return ftPct;
	}
	public void setFtPct(double ftPct) {
		this.ftPct = ftPct;
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
	public double getTov() {
		return tov;
	}
	public void setTov(double tov) {
		this.tov = tov;
	}
	public int getPf() {
		return pf;
	}
	public void setPf(int pf) {
		this.pf = pf;
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
	
	public static List<GameStatsDto> gamesStatsToDto(List<GameStats> games) {
		List<GameStatsDto> gamesDto = new ArrayList<>();
		
		for(int i = 0; i < games.size(); i++) {
			gamesDto.add(gameStatsToDto(games.get(i)));
		}
		
		return gamesDto;
	}
	
	public static List<GameStatsDto[]> gamesStatsArrayToDto(List<GameStats[]> games) {
		List<GameStatsDto[]> gamesDto = new ArrayList<>();
			
		for(int i = 0; i < games.size(); i++) {
			GameStatsDto[] listDto = new GameStatsDto[2];
			for(int j = 0; j < 2; j++) {
				listDto[j] = gameStatsToDto(games.get(i)[j]);				
			}
			gamesDto.add(listDto);
		}
		
		return gamesDto;
	}
	
	public static GameStatsDto gameStatsToDto(GameStats game) {
		GameStatsDto dto = new GameStatsDto();
		dto.setId(game.getId());
		dto.setSeasonId(game.getSeasonId());
		dto.setTeamId(game.getTeamId());
		dto.setTeamAbbreviation(game.getTeamAbbreviation());
		dto.setTeamName(game.getTeamName());
		dto.setGameId(game.getGameId());
		dto.setFgPct(game.getFgPct());
		dto.setFg3Pct(game.getFg3Pct());
		dto.setFtPct(game.getFtPct());
		dto.setReb(game.getReb());
		dto.setAst(game.getAst());
		dto.setStl(game.getStl());
		dto.setBlk(game.getBlk());
		dto.setTov(game.getTov());
		dto.setPf(game.getPf());
		dto.setPeriod1Score(game.getPeriod1Score());
		dto.setPeriod2Score(game.getPeriod2Score());
		dto.setPeriod3Score(game.getPeriod3Score());
		dto.setPeriod4Score(game.getPeriod4Score());
		
		return dto;
	}
}
