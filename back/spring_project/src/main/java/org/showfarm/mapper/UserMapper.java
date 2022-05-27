package org.showfarm.mapper;

import java.util.List;

import org.showfarm.domain.PostVO;
import org.showfarm.domain.UserDTO;
import org.showfarm.domain.UserVO;

public interface UserMapper {
	
	public int insert(UserVO vo);
	public int delete(String mb_id);
	public UserVO select(UserVO vo);
	public List<PostVO> location(UserDTO dto);
	public List<UserVO> getList(UserDTO dto);
	

}
