package org.showfarm.controller;

import java.util.List;

import org.showfarm.domain.TradeVO;
import org.showfarm.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/trade/")
@RestController
@Log4j
@AllArgsConstructor
public class TradeController {
	
	@Autowired
	private TradeService service;
	
	@PostMapping(value = "/new", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public ResponseEntity<String> create(@RequestBody TradeVO vo) {
	
		log.info("TradeVO: " + vo);

		int insertCount = service.register(vo); 
		log.info("Trade INSERT COUNT: " + insertCount);

		return insertCount == 1  
				?  new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
//	@GetMapping(value = "/{trade_id}",
//			produces = {MediaType.APPLICATION_ATOM_XML_VALUE,
//						MediaType.APPLICATION_JSON_UTF8_VALUE})
//	public ResponseEntity<TradeVO> get(@PathVariable("trade_id") int trade_id){
//	
//		log.info("get: " + trade_id);
//		
//		return new ResponseEntity<>(service.get(trade_id), HttpStatus.OK);
//	}
	
	@DeleteMapping(value= "/{trade_id}", produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> remove(@PathVariable("trade_id") int trade_id){
		
		log.info("remove: " + trade_id);
		
		return service.remove(trade_id) == 1
				? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping(value = "/{mb_id}",
			produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<TradeVO>> getList (@PathVariable("mb_id") String mb_id){
		
		log.info("getList...............");

		
		return new ResponseEntity<>(service.getList(mb_id), HttpStatus.OK);
	}

}
