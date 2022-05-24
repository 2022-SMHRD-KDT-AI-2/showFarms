package org.showfarm.service;

import org.showfarm.domain.PostVO;
import org.showfarm.domain.VideoVO;
import org.showfarm.mapper.VideoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class VideoServiceImpl implements VideoService {

	@Setter(onMethod_ = @Autowired)
	private VideoMapper mapper;
	
	@Override
	public int register(VideoVO vo) {		
		log.info("register........" + vo);
		
		return mapper.insert(vo);
	}

	@Override
	public VideoVO get(int video_id) {
		log.info("get........." + video_id);
		return mapper.read(video_id);
	}

	@Override
	public int remove(int video_id) {
		log.info("remove..........." + video_id );
		return mapper.delete(video_id);
	}

}
