package org.showfarm.service;

import java.util.List;

import org.showfarm.domain.PostVO;
import org.showfarm.domain.UserDTO;
import org.showfarm.domain.UserVO;

public interface UserService {
	
	public int register(UserVO vo);
	public UserVO insertCheck(UserVO vo);
	public int remove(String mb_id);
	public List<PostVO> location(UserDTO dto);
	public List<UserVO> getList(UserDTO dto);
	

}
