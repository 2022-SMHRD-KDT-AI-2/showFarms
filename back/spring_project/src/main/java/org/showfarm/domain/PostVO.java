package org.showfarm.domain;

import lombok.Data;

@Data
public class PostVO {

	private int post_id;
	private String mb_id;
	private String post_img;
	private String post_title;
	private String post_content;
	private int post_price;
	private Long post_discount;
	private String post_dt;
 
}
