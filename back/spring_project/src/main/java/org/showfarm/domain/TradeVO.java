package org.showfarm.domain;

import java.util.Date;

import lombok.Data;

@Data
public class TradeVO {

	private int trade_id;
	private int trade_price;
	private int vol;
	private Date trade_dt;
	private String mb_id;
	private String buyer_id;
	private int post_id;
	private String post_title;
}
