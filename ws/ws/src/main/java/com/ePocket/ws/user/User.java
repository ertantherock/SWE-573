package com.ePocket.ws.user;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.Data;

@Table(name="Users")
@Data
@Entity
public class User {
	@Id
	@GeneratedValue
	@Column(name="id")
	private long id;
	
	@NotNull
	@Size(min = 4, max = 255)
	@EssizUserNameAnnotation

	@Column(name="username")
	private String username;
	
	@NotNull
	@Size(min=8, max=255)
	@Column(name="mail")
	private String mail;
	
	@NotNull
	@Size(min=8, max=255)
	@Column(name="password")	
	private String password;
	
	
	
	@Lob
	private String image;
	
	
	

	
}
