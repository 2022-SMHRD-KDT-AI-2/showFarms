package org.showfarm.domain;

import java.util.List;

import lombok.Data;
@Data
public class PostListVO {

	private List<PostVO> postList;
	private int total;
}
