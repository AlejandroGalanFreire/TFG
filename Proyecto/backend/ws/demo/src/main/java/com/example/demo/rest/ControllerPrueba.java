package com.example.demo.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerPrueba {

	@GetMapping("/nombre")
	public String nombre() {
		return "nombre";
	}
	
	@GetMapping("/description")
	public String description() {
		return "descripcion";
	}
}
