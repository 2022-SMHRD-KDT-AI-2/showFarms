package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.LiveVO;

public interface LiveService {

	public int register(LiveVO vo);
	public LiveVO get(int live_id);
	public int modify(LiveVO vo);
	public int remove(int live_id);
	public List<LiveVO> getList();
}
