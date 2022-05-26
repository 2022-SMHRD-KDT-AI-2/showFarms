package org.showfarm.mapper;

import org.showfarm.domain.UserVO;

public interface UserMapper {
	
	public int insert(UserVO vo);
	public int delete(String mb_id);
	public UserVO select(String token);

}
