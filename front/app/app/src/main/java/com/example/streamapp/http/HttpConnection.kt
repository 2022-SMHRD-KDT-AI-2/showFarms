package com.example.streamapp.http

import android.content.Context
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley


class HttpConnection {
    private val url: String = "http://121.147.185.200:8081"

    fun get(context:Context, path: String) {
        val req = object : StringRequest(Method.GET, url , Response.Listener { response ->

        }, Response.ErrorListener { error ->

        }) {
            override fun getBodyContentType(): String {
                return "application/json; charset=utf-8"
            }
            /* getBodyContextType에서는 요청에 포함할 데이터 형식을 지정한다.
             * getBody에서는 요청에 JSON이나 String이 아닌 ByteArray가 필요하므로, 타입을 변경한다. */
        }
        Volley.newRequestQueue(context).add(req).body
    }

}