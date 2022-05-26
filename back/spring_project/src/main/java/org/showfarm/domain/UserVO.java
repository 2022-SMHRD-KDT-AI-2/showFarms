package org.showfarm.domain;

import lombok.Data;

@Data
public class UserVO {
	
	private String mb_id;
	private String mb_name;
	private String mb_lati;
	private String mb_longi;
	private int mb_type;
	private String mb_pw;

}
