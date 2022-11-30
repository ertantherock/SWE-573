package com.ePocket.ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

public class EssizUserNameValidation implements ConstraintValidator<EssizUserNameAnnotation,String> {
	
	@Autowired
	UserRepository userRepository;
	
	
	@Override
	public boolean isValid(String username, ConstraintValidatorContext context) {
		User user = userRepository.findByUsername(username); //User repositoryde findByUsername fonksiyonunu kullandık.
		//user clasında da usernameleri match edip eğer username varsa false döndüreceğüz.
		
		if(user != null) {
			return false;
		}
		return true;
	}

}
