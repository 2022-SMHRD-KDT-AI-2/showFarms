package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.LiveVO;
import org.showfarm.mapper.LiveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class LiveServiceImpl implements LiveService {

	@Setter(onMethod_ = @Autowired)
	private LiveMapper mapper;
	
	@Override
	public int register(LiveVO vo) {
		log.info("register........" + vo);
		return mapper.insert(vo);
	}

	@Override
	public LiveVO get(int live_id) {
		log.info("get........." + live_id);
		return mapper.read(live_id);
	}

	@Override
	public int modify(LiveVO vo) {
		log.info("modify.........." + vo);
		return mapper.update(vo);
	}

	@Override
	public int remove(int live_id) {
		log.info("remove..........." + live_id );
		return mapper.delete(live_id);
	}

	@Override
	public List<LiveVO> getList() {
		log.info("get Live List");
		return mapper.getList();
	}

}
