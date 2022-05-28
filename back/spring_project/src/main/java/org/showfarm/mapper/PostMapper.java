package org.showfarm.mapper;

import java.util.List;

import org.showfarm.domain.Criteria;
import org.showfarm.domain.PostVO;

public interface PostMapper {

	public int insert(PostVO vo);
	public PostVO read(int post_id);
	public int delete(int post_id);
	public int update(PostVO vo);
	public List<PostVO> getList();
	public List<PostVO> search(String keyword);
	public List<PostVO> getListWithPaging(Criteria cri);
	public int getTotalCount(Criteria cri);
}
