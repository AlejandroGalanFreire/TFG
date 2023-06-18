package com.example.demo.games.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.games.model.GameStats;
import com.example.demo.games.model.GameStatsDto;
import com.example.demo.games.model.Periods;
import com.example.demo.games.service.GamesStatsService;

@RestController
@RequestMapping("/rest")
public class GamesStatsController {
	
	@Autowired
	private GamesStatsService gsService;

	/**
	 * @return todos los partidos y sus estadísticas
	 */
	@GetMapping("/gamesstats")
	public List<GameStatsDto> getGamesStats(){
		return GameStatsDto.gamesStatsToDto(gsService.findAllGamesStats());
	}
	
	/**
	 * @return Los partidos con las estadísticas de cada equipo dentro del partido
	 */
	@GetMapping("/gamesstatsbydate")
	public List<GameStatsDto[]> getGamesStatsByDate(@RequestParam String date){
		List<GameStats> allTeamsOfGames = gsService.findAllGamesStatsByDate(date); // todos los equipos que jugaron partidos
		
		List<GameStats[]> games = new ArrayList<>(); // agrupaciones de los equipos en el partido que le corresponde
		// cada elemento de la lista va a tener dos gameStats, que son las estadisticas de los dos equipos que han jugado el partido
		
		// la idea es agrupar los equipos de un partido en un solo elemento
		for(int i = 0; i < allTeamsOfGames.size(); i++) {
			// comprobamos que el equipo actual no tenga ya su partido guardado
			if(!hasGame(allTeamsOfGames.get(i), games)) {
				GameStats[] game = new GameStats[2];
				game[0] = allTeamsOfGames.get(i);
				// obtener puntos en los distintos cuartos del equipo
				Periods cuartosTeam1 = gsService.findPeriodsOfTeamInGame(game[0].getGameId(), game[0].getTeamId());
				game[0].setPeriod1Score(cuartosTeam1.getPeriod1Score());
				game[0].setPeriod2Score(cuartosTeam1.getPeriod2Score());
				game[0].setPeriod3Score(cuartosTeam1.getPeriod3Score());
				game[0].setPeriod4Score(cuartosTeam1.getPeriod4Score());
				
				game[1] = findOpponent(allTeamsOfGames.get(i), allTeamsOfGames);
				// obtener puntos en los distintos cuartos del equipo
				Periods cuartosTeam2 = gsService.findPeriodsOfTeamInGame(game[1].getGameId(), game[1].getTeamId());
				game[1].setPeriod1Score(cuartosTeam2.getPeriod1Score());
				game[1].setPeriod2Score(cuartosTeam2.getPeriod2Score());
				game[1].setPeriod3Score(cuartosTeam2.getPeriod3Score());
				game[1].setPeriod4Score(cuartosTeam2.getPeriod4Score());
				
				games.add(game);				
			}
		}
		
		return GameStatsDto.gamesStatsArrayToDto(games);
	}

	/*
	 * Devuelve si el equipo pasado por parámetro ya ha sido almacenado en su enfrentamiento correspondiente
	 */
	private boolean hasGame(GameStats team, List<GameStats[]> games) {
		for(int i = 0; i < games.size(); i++) {
			for(int j = 0; j < 2; j++) {
				if(games.get(i)[j].equals(team))
					return true;
			}
		}
		return false;
	}

	/*
	 * param gameStats equipo del que buscamos el oponente
	 * param allTeams todos los equipos para buscar el oponente
	 */
	private GameStats findOpponent(GameStats gameStats, List<GameStats> allTeams) {
		String[] matchup;
		if(gameStats.getMatchup().contains("@")) {
			matchup = gameStats.getMatchup().replace(" ", "").split("@");			
		}else {
			matchup = gameStats.getMatchup().replace(" ", "").split("vs.");
		}
		
		for(int i = 0; i < allTeams.size(); i++) {
			if(allTeams.get(i).getTeamAbbreviation().equals(matchup[1])) {
				return allTeams.get(i);
			}
		}
		return null;
	}
}
