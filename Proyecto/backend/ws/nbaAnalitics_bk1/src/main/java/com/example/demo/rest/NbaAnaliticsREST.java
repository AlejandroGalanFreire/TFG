package com.example.demo.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class NbaAnaliticsREST {

	@RequestMapping(method=RequestMethod.GET)
	public String getTitle() {
		return "nbaAnalitics";
	}
}
