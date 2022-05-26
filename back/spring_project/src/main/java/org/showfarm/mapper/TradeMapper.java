package org.showfarm.mapper;

import java.util.List;

import org.showfarm.domain.TradeVO;

public interface TradeMapper {
	
	public int insert(TradeVO vo);
	public TradeVO read(int trade_id);
	public int delete(int trade_id);
	public List<TradeVO> getList(String mb_id);

}
