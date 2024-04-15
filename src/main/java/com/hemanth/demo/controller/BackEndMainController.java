package com.hemanth.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BackEndMainController {

	
	@RequestMapping("/")
	public String Home() {
	return "Home.jsp";
	}
}
