package com.example.demo.players.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.players.model.Player;
import com.example.demo.players.service.PlayerService;

@RestController
@RequestMapping("/rest")
public class PlayerController {

	@Autowired
	PlayerService psService;

	/**
	 * @return todos los jugadores y sus estadísticas
	 */
	@GetMapping("/playersstats")
	public List<Player> getPlayersStats() {
		return psService.findAllPlayersStats();
	}
	
	/**
	 * @return el jugador con el id especificado
	 */
	@GetMapping("/playerstatsbyid")
	public Player getPlayerStatsById(@RequestParam int playerId) {
		return psService.findPlayerStatsById(playerId);
	}

	/**
	 * @return todos los jugadores y sus información general
	 */
	@GetMapping("/playersinfo")
	public List<Player> getPlayersInfo() {
		List<Player> playersInfo = psService.findAllPlayersInfo();

		for (Player player : playersInfo) {
			player.setHeight(getMetros(player.getHeight()));
			player.setWeight(getKG(player.getWeight()));
		}

		return playersInfo;
	}
	
	/**
	 * @return todos los jugadores del equipo especificado
	 */
	@GetMapping("/teamTemplate")
	public List<Player> getPlayersInfoByTeamId(@RequestParam int teamId) {
		List<Player> playersInfo = psService.findPlayersInfoByTeamId(teamId);

		for (Player player : playersInfo) {
			player.setHeight(getMetros(player.getHeight()));
			player.setWeight(getKG(player.getWeight()));
		}

		return playersInfo;
	}

	private String getMetros(String height) {
		double alturaEnPies = Double.parseDouble(height);
		double factorConversion = 0.3048; // 1 pie equivale a 0.3048 metros
		double alturaEnMetros = alturaEnPies * factorConversion;
		// redondeo dos decimales
		alturaEnMetros = Math.round(alturaEnMetros * 100.0) / 100.0;
		return String.valueOf(alturaEnMetros);
	}

	private String getKG(String weight) {
		double pesoEnLibras = Double.parseDouble(weight);
		double factorConversion = 0.45359237; // 1 libra equivale a 0.45359237 kilos
		double pesoEnKilos = pesoEnLibras * factorConversion;
		// redondeo dos decimales
		pesoEnKilos = Math.round(pesoEnKilos * 100.0) / 100.0;
		return String.valueOf(pesoEnKilos);
	}

}
