package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.Criteria;
import org.showfarm.domain.PostAttachVO;
import org.showfarm.domain.PostVO;
import org.showfarm.mapper.PostAttachMapper;
import org.showfarm.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class PostServiceImpl implements PostService{

	@Setter(onMethod_ = @Autowired )
	private PostMapper mapper;
	

	
	@Override
	public int register(PostVO vo) {

		log.info("register........" + vo);
		

		return mapper.insert(vo);
	}

	@Override
	public PostVO get(int post_id) {

		log.info("get........." + post_id);
		return mapper.read(post_id);
	}

	@Override
	public int modify(PostVO vo) {

		log.info("modify.........." + vo);
		

		return mapper.update(vo);
	}

	@Override
	public boolean remove(int post_id) {

		log.info("remove..........." + post_id );
//		attachMapper.deleteAll(post_id);
		return mapper.delete(post_id) == 1;
	}

//	@Override
//	public List<PostVO> getList() {
//
//		log.info("get Post List");
//		return mapper.getList();
//	}
	
	@Override
	public List<PostVO> search(String keyword) {

		log.info("get........." + keyword);
		return mapper.search(keyword);
	}

	@Override
	public List<PostVO> getList(Criteria cri) {
		log.info("get List with criteria: " + cri);

		return mapper.getListWithPaging(cri);
	}

	@Override
	public int getTotal(Criteria cri) {
		log.info("get total count");
		return mapper.getTotalCount(cri);
	}


	
	


}
