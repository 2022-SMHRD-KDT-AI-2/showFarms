package org.showfarm.mapper;

import org.showfarm.domain.VideoVO;

public interface VideoMapper {
	public int insert(VideoVO vo);
	public VideoVO read(int video_id);
	public int delete(int video_id);
}
