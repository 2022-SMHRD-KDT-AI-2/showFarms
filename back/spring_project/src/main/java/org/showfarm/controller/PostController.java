package org.showfarm.controller;

import java.util.List;

import org.showfarm.domain.PostVO;
import org.showfarm.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/posts/")
@RestController
@Log4j
@AllArgsConstructor
public class PostController {

	@Autowired
	private PostService service;
	
	@PostMapping(value = "/new", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public ResponseEntity<String> create(@RequestBody PostVO vo) {

		log.info("PostVO: " + vo);

		int insertCount = service.register(vo);
		log.info("Post INSERT COUNT: " + insertCount);

		return insertCount == 1  
				?  new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping(value = "/{post_id}",
			produces = {MediaType.APPLICATION_ATOM_XML_VALUE,
						MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<PostVO> get(@PathVariable("post_id") int post_id){
	
		log.info("get: " + post_id);
		
		return new ResponseEntity<>(service.get(post_id), HttpStatus.OK);
	}
	
	@DeleteMapping(value= "/{post_id}", produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> remove(@PathVariable("post_id") int post_id){
		
		log.info("remove: " + post_id);
		
		return service.remove(post_id) == 1
				? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(method = {RequestMethod.PUT, RequestMethod.PATCH},
			value = "/{post_id}",
			consumes = "application/json",
			produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> modify(
				@RequestBody PostVO vo,
				@PathVariable("post_id") int post_id){
		
		vo.setPost_id(post_id);;
		log.info("post_id: " + post_id);
		log.info("modify: " + vo);
		
		return service.modify(vo) == 1
				? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
						
	}
	
	@GetMapping(value = "/list",
			produces = {
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<PostVO>> getList (){
		
		log.info("getList...............");

		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
