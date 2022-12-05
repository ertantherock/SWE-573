package com.ePocket.ws.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ePocket.ws.shared.ResponseGeneric;

@RestController
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("/api/1.0/posts")
	ResponseGeneric savePost(@RequestBody Post post) {
		postService.save(post);
		return new ResponseGeneric("Post Succesfully Saved");

	}

}
