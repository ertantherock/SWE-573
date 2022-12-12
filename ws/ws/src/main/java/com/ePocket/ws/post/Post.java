package com.ePocket.ws.post;


import java.util.Date;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ePocket.ws.user.User;

import lombok.Data;

@Data
@Entity
public class Post {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String contentTitle;
	private String contentLabel;
	private String contentPost;
	private String contentLink;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date timeStampDate;
	


}
