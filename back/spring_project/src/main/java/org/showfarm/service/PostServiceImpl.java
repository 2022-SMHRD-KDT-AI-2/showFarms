package org.showfarm.service;

import java.util.List;

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
	
	@Setter(onMethod_ = @Autowired)
	private PostAttachMapper attachMapper;
	
	@Override
	public int register(PostVO vo) {

		log.info("register........" + vo);
		
		if (vo.getAttachList() == null || vo.getAttachList().size() <= 0) {
			return mapper.insert(vo);
		}

		vo.getAttachList().forEach(attach -> {

			attach.setPost_id(vo.getPost_id());
			attachMapper.insert(attach);
		});
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
		
		attachMapper.deleteAll(vo.getPost_id());
		if (vo.getAttachList().size() > 0) {

			vo.getAttachList().forEach(attach -> {

				attach.setPost_id(vo.getPost_id());
				attachMapper.insert(attach);
			});
		}
		return mapper.update(vo);
	}

	@Override
	public boolean remove(int post_id) {

		log.info("remove..........." + post_id );
		attachMapper.deleteAll(post_id);
		return mapper.delete(post_id) == 1;
	}

	@Override
	public List<PostVO> getList() {

		log.info("get Post List");
		return mapper.getList();
	}
	
	@Override
	public List<PostAttachVO> getAttachList(int post_id) {

		log.info("get Attach list by post_id" + post_id);

		return attachMapper.findById(post_id);
	}

	@Override
	public void removeAttach(int post_id) {

		log.info("remove all attach files");

		attachMapper.deleteAll(post_id);
	}

}
