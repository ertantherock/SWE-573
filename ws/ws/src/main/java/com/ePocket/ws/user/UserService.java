package com.ePocket.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // Service layer for users. Layered arc.
public class UserService {
	
	@Autowired
	UserRepository userRepository;

	public void save(User user) {
		userRepository.save(user);
		
	}

}
