package org.showfarm.controller;

import org.showfarm.domain.UserVO;
import org.showfarm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
@Log4j
public class UserController {
	
	@Autowired
	UserVO vo = new UserVO();
	
	@Autowired
	private UserService service;
	
	@PostMapping(value = "/new", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public ResponseEntity<String> create(@RequestBody UserVO vo) {
	
		log.info("UserVO: " + vo);

		int insertCount = service.register(vo); 
		log.info("User INSERT COUNT: " + insertCount);

		return insertCount == 1  
				? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping(value = "/login",
			produces = {MediaType.APPLICATION_ATOM_XML_VALUE,
						MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<Boolean> login(@RequestBody UserVO vo) {
		
//		UserVO vo = new UserVO();
//		
//		vo.setMb_id(mb_id);
//		vo.setMb_pw(mb_pw);
		
		UserVO idCheck = service.insertCheck(vo);
		log.info(vo);
		
		return idCheck != null  
				?  new ResponseEntity<>(true,HttpStatus.OK)
				: new ResponseEntity<>(false,HttpStatus.OK);
		
		
	}
	

}
