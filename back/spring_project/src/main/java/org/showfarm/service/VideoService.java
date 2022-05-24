package org.showfarm.service;

import org.showfarm.domain.VideoVO;

public interface VideoService {
	
	public int register(VideoVO vo);
	public VideoVO get(int video_id);
	public int remove(int video_id);
}
