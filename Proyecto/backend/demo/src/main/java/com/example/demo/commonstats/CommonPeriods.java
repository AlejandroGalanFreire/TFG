package com.example.demo.commonstats;

public class CommonPeriods extends CommonStats implements PeriodsStats {
	
	protected int gameId;
	protected int period1Score;
	protected int period2Score;
	protected int period3Score;
	protected int period4Score;

	@Override
	public int getGameId() {
		return gameId;
	}

	@Override
	public void setGameId(int gameId) {
		this.gameId = gameId;
	}

	@Override
	public int getPeriod1Score() {
		return period1Score;
	}

	@Override
	public void setPeriod1Score(int period1Score) {
		this.period1Score = period1Score;
	}

	@Override
	public int getPeriod2Score() {
		return period2Score;
	}

	@Override
	public void setPeriod2Score(int period2Score) {
		this.period2Score = period2Score;
	}

	@Override
	public int getPeriod3Score() {
		return period3Score;
	}

	@Override
	public void setPeriod3Score(int period3Score) {
		this.period3Score = period3Score;
	}

	@Override
	public int getPeriod4Score() {
		return period4Score;
	}

	@Override
	public void setPeriod4Score(int period4Score) {
		this.period4Score = period4Score;
	}

	
}
