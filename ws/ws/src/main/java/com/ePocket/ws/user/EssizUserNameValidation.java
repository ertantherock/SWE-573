package com.ePocket.ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

public class EssizUserNameValidation implements ConstraintValidator<EssizUserNameAnnotation,String> {
	
	@Autowired
	UserRepository userRepository;
	
	
	@Override
	public boolean isValid(String userName, ConstraintValidatorContext context) {
		User user = userRepository.findByUserName(userName); //User repositoryde findByUsername fonksiyonunu kullandık.
		//user clasında da usernameleri match edip eğer username varsa false döndüreceğüz.
		
		if(user != null) {
			return false;
		}
		return true;
	}

}
