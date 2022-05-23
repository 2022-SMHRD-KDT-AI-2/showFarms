package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.PostAttachVO;
import org.showfarm.domain.PostVO;

public interface PostService {

	public int register(PostVO vo);
	public PostVO get(int post_id);
	public int modify(PostVO vo);
	public boolean remove(int post_id);
	public List<PostVO> getList();
	
	// image
	public List<PostAttachVO> getAttachList(int post_id);
	
	public void removeAttach(int post_id);
}
