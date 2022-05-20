package org.showfarm.controller;

import org.showfarm.domain.PostVO;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/trade/")
@RestController
@Log4j
@AllArgsConstructor
public class TradeController {
	
	@PostMapping(value = "/new", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public ResponseEntity<String> create(@RequestBody PostVO vo) {
		return null;

//		log.info("PostVO: " + vo);

//		int insertCount = service.register(vo);
//		log.info("Post INSERT COUNT: " + insertCount);
//
//		return insertCount == 1  
//				?  new ResponseEntity<>("success", HttpStatus.OK)
//				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
