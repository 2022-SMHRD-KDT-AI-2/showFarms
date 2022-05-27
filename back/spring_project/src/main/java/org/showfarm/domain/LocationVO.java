package org.showfarm.domain;

import java.util.List;

import lombok.Data;

@Data
public class LocationVO {

	private List<PostVO> postList;
	private List<UserVO> userList;
}
