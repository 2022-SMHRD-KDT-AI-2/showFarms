package org.showfarm.controller;

import java.io.IOException;
import java.util.Optional;

import org.showfarm.domain.VideoVO;
import org.showfarm.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.support.ResourceRegion;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRange;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.MediaTypeFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RestController
@RequestMapping("/video/")
@Log4j
public class VideoController {


	@Autowired
	private VideoService service;
	
	@PostMapping(value = "/new", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public ResponseEntity<String> create(@RequestBody VideoVO vo) {

		log.info("LiveVO: " + vo);

		int insertCount = service.register(vo);
		log.info("Live INSERT COUNT: " + insertCount);

		return insertCount == 1  
				?  new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
	
	@DeleteMapping(value= "/{video_id}", produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> remove(@PathVariable("video_id") int video_id){
		
		log.info("remove: " + video_id);
		
		return service.remove(video_id) == 1
				? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
	@GetMapping(value = "/{name}")
	public ResponseEntity<ResourceRegion> getVideo(@RequestHeader HttpHeaders headers, 
			@PathVariable String name) throws IOException {

		
		log.info("VideoController.getVideo");
		
		UrlResource video = new UrlResource("file:C:\\upload\\video\\"+name+".mp4");
		ResourceRegion resourceRegion;
		
		final long chunkSize = 10000000L; 
		long contentLength = video.contentLength();


		Optional<HttpRange> optional = headers.getRange().stream().findFirst(); 
		HttpRange httpRange; 
		
		if (optional.isPresent()) { 
			
			httpRange = optional.get(); 
			long start = httpRange.getRangeStart(contentLength); 
			long end = httpRange.getRangeEnd(contentLength); 
			long rangeLength = Long.min(chunkSize, end - start + 1); 
			resourceRegion = new ResourceRegion(video, start, rangeLength); 
		} else { 
			long rangeLength = Long.min(chunkSize, contentLength); 
			resourceRegion = new ResourceRegion(video, 0, rangeLength); 
		}

		
		return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
				.contentType(MediaTypeFactory.getMediaType(video)
						.orElse(MediaType.APPLICATION_OCTET_STREAM)) 
				.body(resourceRegion);
	
	
	}
}
