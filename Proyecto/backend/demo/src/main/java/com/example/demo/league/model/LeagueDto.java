package com.example.demo.league.model;

public class LeagueDto {

	private String leagueName;
	private String[] conferences;

	public String getLeagueName() {
		return leagueName;
	}

	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}

	public String[] getConferences() {
		return conferences;
	}

	public void setConferences(String[] conferences) {
		this.conferences = conferences;
	}

	public static LeagueDto leagueToDto(League league) {
		LeagueDto dto = new LeagueDto();
		dto.setLeagueName(league.getLeagueName());
		String[] conferences = league.getConferences().split(",");
		dto.setConferences(conferences);

		return dto;
	}
}
