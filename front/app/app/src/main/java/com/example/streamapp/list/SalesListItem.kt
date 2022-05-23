package com.example.streamapp.list

data class SalesListItem(
    val img: Int,
    val title: String,
    val price: Int,
    val unit: String,
    val shipmentFee: String,
    val url: String,
) {
}