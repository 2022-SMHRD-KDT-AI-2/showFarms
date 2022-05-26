package org.showfarm.domain;

import lombok.Data;

@Data
public class UserVO {
	
	private String mb_id;
	private String mb_name;
	private double mb_lati;
	private double mb_longi;
	private int mb_type;
	private String mb_pw;

}
