package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.TradeVO;

public interface TradeService {
	
	public int register(TradeVO vo);
	public TradeVO get(int post_id);
	public int remove(int live_id);
	public List<TradeVO> getList();

}
