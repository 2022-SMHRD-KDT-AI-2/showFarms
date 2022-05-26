package org.showfarm.service;

import org.showfarm.domain.UserVO;

public interface UserService {
	
	public int register(UserVO vo);
	public UserVO insertCheck(UserVO vo);
	public int remove(String mb_id);
	

}
