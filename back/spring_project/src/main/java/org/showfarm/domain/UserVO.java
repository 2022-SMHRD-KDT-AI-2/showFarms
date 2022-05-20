package org.showfarm.domain;

import lombok.Data;

@Data
public class UserVO {
	
	private String mb_id;
	private String mb_name;
	private String mb_phone;
	private String token;
	private int mb_type;

}
