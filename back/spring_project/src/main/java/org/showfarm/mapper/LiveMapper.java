package org.showfarm.mapper;

import java.util.List;

import org.showfarm.domain.LiveVO;

public interface LiveMapper {

	public int insert(LiveVO vo);
	public LiveVO read(int live_id);
	public int delete(int live_id);
	public int update(LiveVO vo);
	public List<LiveVO> getList();
}
