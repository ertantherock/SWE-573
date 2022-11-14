package com.ePocket.ws.user;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Table(name="Users")
@Data
@Entity
public class User {
	@Id
	@GeneratedValue
	@Column(name="id")
	private long id;
	
	@Column(name="userName")
	private String userName;
	
	@Column(name="displayName")
	private String displayName;
	
	@Column(name="password")
	private String password;
	
	
	

	
}
