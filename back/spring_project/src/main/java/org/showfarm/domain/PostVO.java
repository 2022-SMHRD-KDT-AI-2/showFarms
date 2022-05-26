package org.showfarm.domain;

import java.util.List;

import lombok.Data;

@Data
public class PostVO {

	private int post_id;
	private String mb_id;
	private String post_title;
	private String post_content;
	private int post_price;
	private String post_unit;
	private String post_category;
	private String post_shipping;	
	private String post_dt;
	private String base64;
	private String post_img;

	
}
