package org.showfarm.mapper;

import java.util.List;

import org.showfarm.domain.PostAttachVO;



public interface PostAttachMapper {

	public void insert(PostAttachVO vo);

	public void delete(String uuid);

	public List<PostAttachVO> findById(int post_id);

	public void deleteAll(int post_id);

	public List<PostAttachVO> getOldFiles();

}