package com.ePocket.ws;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.ePocket.ws.user.User;
import com.ePocket.ws.user.UserService;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class WsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WsApplication.class, args);
	}

	/*
	 * @Bean CommandLineRunner createInitialUsers(UserService userService) {
	 * 
	 * return (args) -> { User user = new User(); user.setUsername("kullanıcı1");
	 * user.setMail("ertancank@gmail.com"); user.setPassword("sifre123");
	 * userService.save(user); };
	 * 
	 * }
	 */

}
