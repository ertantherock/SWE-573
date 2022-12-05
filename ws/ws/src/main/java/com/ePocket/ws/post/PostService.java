package com.ePocket.ws.post;

import java.util.Date;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class PostService {
	PostRepository postRepository;

	public PostService(PostRepository postRepository) {
		super();
		this.postRepository = postRepository;
	}

	public void save(Post post) {
		post.setTimeStampDate(new Date());
		postRepository.save(post);
		
	}

	public Page<Post> getPosts(Pageable page) {
		// TODO Auto-generated method stub
		return postRepository.findAll(page);
	}
	
	
	
}
