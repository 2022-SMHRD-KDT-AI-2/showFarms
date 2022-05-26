package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.TradeVO;
import org.showfarm.mapper.TradeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class TradeServiceImpl implements TradeService {
	
	@Setter(onMethod_ = @Autowired )
	private TradeMapper mapper;

	@Override
	public int register(TradeVO vo) {
		
		log.info("register........" + vo);
		return mapper.insert(vo);
	}

	@Override
	public TradeVO get(int trade_id) {
		
		log.info("get........." + trade_id);
		return mapper.read(trade_id);
	}

	@Override
	public int remove(int trade_id) {
		
		log.info("remove..........." + trade_id );
		return mapper.delete(trade_id);
	}

	@Override
	public List<TradeVO> getList(String mb_id) {
		
		log.info("get Trade List");
		return mapper.getList(mb_id);
	}

}
