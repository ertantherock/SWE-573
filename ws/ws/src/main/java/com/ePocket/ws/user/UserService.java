package com.ePocket.ws.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ePocket.ws.error.NotFound;

@Service // Service layer for users. Layered arc.
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	PasswordEncoder passwordEncoder;
	
	public UserService(UserRepository userRepository) {
		this.userRepository=userRepository;
		this.passwordEncoder= new BCryptPasswordEncoder();
	}
	

	
	public void save(User user) {
		String encryptedPassword= this.passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userRepository.save(user);
		
	}



	public User getByUsername(String username) {
		User inDB = userRepository.findByUsername(username);
		if(inDB == null ) {
			throw new NotFound();
		
		}
		return inDB;
		
	
		
	}
	
	public Page<User> getUsers(Pageable page) {
		return userRepository.findAll(page);
	}
	
	
	





}
