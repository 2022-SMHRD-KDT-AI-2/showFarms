package org.showfarm.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.xml.bind.DatatypeConverter;

import org.showfarm.domain.Criteria;
import org.showfarm.domain.PageDTO;
import org.showfarm.domain.PostListVO;
import org.showfarm.domain.PostVO;
import org.showfarm.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/posts")
@RestController
@Log4j
@AllArgsConstructor
public class PostController {

	@Autowired
	private PostService service;
	
	

	
	@PostMapping(value = "/new", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public ResponseEntity<String> create(@RequestBody PostVO vo) {

		String[] strings = vo.getBase64().split(",");
        String extension;
        switch (strings[0]) {//check image's extension
            case "data:image/jpeg;base64":
                extension = "jpeg";
                break;
            case "data:image/png;base64":
                extension = "png";
                break;
            default://should write cases for more images types
                extension = "jpg";
                break;
        }
        
        
        UUID uuid = UUID.randomUUID();
        String url = uuid.toString() + "." + extension;
        
        vo.setPost_img(url);
        //convert base64 string to binary data
        byte[] data = DatatypeConverter.parseBase64Binary(strings[1]);
        String path = "c:\\upload\\image\\" + url;
        File file = new File(path);
        try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
            outputStream.write(data);

        } catch (IOException e) {
            e.printStackTrace();
        }
        
     
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
		

		return service.remove(post_id)
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
	
	@GetMapping("/list")
	public ResponseEntity<PostListVO> list(Criteria cri) {

		log.info("list: " + cri);
		List<PostVO> post = service.getList(cri);

		int total = service.getTotal(cri);

		log.info("total: " + total);

		PostListVO postList = new PostListVO();
		postList.setPostList(post);
		postList.setTotal(total);
		

		return new ResponseEntity<>(postList, HttpStatus.OK);
	}
	
	
//	@GetMapping(value = "/list",
//			produces = {
//					MediaType.APPLICATION_JSON_UTF8_VALUE})
//	public ResponseEntity<List<PostVO>> getList (){
//		
//		log.info("getList...............");
//
//		return new ResponseEntity<>(service.getList(), HttpStatus.OK);
//	}
	
	
	@GetMapping(value = "/{keyword}",
			produces = {MediaType.APPLICATION_ATOM_XML_VALUE,
						MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<PostVO>> search(@PathVariable("keyword") String keyword){
	
		log.info("get: " + keyword);
		
		return new ResponseEntity<>(service.search(keyword), HttpStatus.OK);
	}
	
	
	
	

	
}
