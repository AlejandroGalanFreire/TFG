package com.example.demo.games.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.games.model.GameElem;
import com.example.demo.games.service.GameElemService;

@RestController
@RequestMapping("/rest")
public class GameElemController {
	
	@Autowired
	private GameElemService gsService;

	/**
	 * @return todos los partidos y sus estadísticas
	 */
	@GetMapping("/gamesstats")
	public List<GameElem> getGamesStats(){
		return gsService.findAllGamesStats();
	}
	
	/**
	 * @return Los partidos con las estadísticas de cada equipo dentro del partido
	 */
	@GetMapping("/gamesstatsbydate")
	public List<GameElem[]> getGamesStatsByDate(@RequestParam String date){
		List<GameElem> allTeamsOfGames = gsService.findAllGamesStatsByDate(date); // todos los equipos que jugaron partidos
		
		List<GameElem[]> games = new ArrayList<>(); // agrupaciones de los equipos en el partido que le corresponde
		// cada elemento de la lista va a tener dos gameStats, que son las estadisticas de los dos equipos que han jugado el partido
		
		// la idea es agrupar los equipos de un partido en un solo elemento
		for(int i = 0; i < allTeamsOfGames.size(); i++) {
			// comprobamos que el equipo actual no tenga ya su partido guardado
			if(!hasGame(allTeamsOfGames.get(i), games)) {
				GameElem[] game = new GameElem[2];
				game[0] = allTeamsOfGames.get(i);				
				game[1] = findOpponent(allTeamsOfGames.get(i), allTeamsOfGames);
				
				games.add(game);				
			}
		}
		
		return games;
	}

	/*
	 * Devuelve si el equipo pasado por parámetro ya ha sido almacenado en su enfrentamiento correspondiente
	 */
	private boolean hasGame(GameElem team, List<GameElem[]> games) {
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
	private GameElem findOpponent(GameElem gameStats, List<GameElem> allTeams) {
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
