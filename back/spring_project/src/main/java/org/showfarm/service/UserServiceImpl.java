package org.showfarm.service;

import org.showfarm.domain.UserVO;
import org.showfarm.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class UserServiceImpl implements UserService {
	
	@Setter(onMethod_ = @Autowired)
	private UserMapper mapper;

	@Override
	public int register(UserVO vo) {
		log.info("register........" + vo);
		return mapper.insert(vo);
	}

	@Override
	public int remove(String mb_id) {
		log.info("remove..........." + mb_id );
		return mapper.delete(mb_id);
	}

	@Override
	public UserVO insertCheck(String mb_id) {
		log.info("check..........." + mb_id);
		return mapper.select(mb_id);
	}

}
