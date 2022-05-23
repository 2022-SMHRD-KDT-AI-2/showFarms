package org.showfarm.domain;

import java.util.Date;

import lombok.Data;

@Data
public class TradeVO {

	private int trade_id;
	private int trade_price;
	private float post_discount;
	private int vol;
	private Date trade_dt;
	private String mb_id;
	private int buyer_id;
}
