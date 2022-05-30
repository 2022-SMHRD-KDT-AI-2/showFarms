package com.example.streamapp.list

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.example.streamapp.databinding.ActivitySalesListBinding
import com.example.streamapp.hideSystemUI
import com.google.gson.GsonBuilder
import fr.arnaudguyon.xmltojsonlib.XmlToJson
import org.json.JSONObject

class SalesListActivity : AppCompatActivity() {
    lateinit var adapter: SalesListAdapter
    private lateinit var binding: ActivitySalesListBinding
    lateinit var requestQueue: RequestQueue

    @SuppressLint("NotifyDataSetChanged")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySalesListBinding.inflate(layoutInflater)
        setContentView(binding.root)
        requestQueue = Volley.newRequestQueue(applicationContext)

        val id = intent.getStringExtra("id")
        adapter = SalesListAdapter(this)

        val req = StringRequest(Request.Method.GET, "http://121.147.185.200:8081/posts/user/$id",
            {
                res ->
                val json = XmlToJson.Builder(res.toString()).build().toJson()
                val result = JSONObject(json?.getString("List").toString())
                val list = result.get("item")

                val gson = GsonBuilder().create()
                adapter.data = gson.fromJson(list.toString(), Array<PostVO>::class.java).toMutableList()
                binding.recyclerViewSalesList.adapter = adapter
                binding.recyclerViewSalesList.layoutManager = LinearLayoutManager(this)
            },
            { })

        req.setShouldCache(false)
        requestQueue.add(req)
    }

    @SuppressLint("NotifyDataSetChanged")
    override fun onResume() {
        super.onResume()
        hideSystemUI(window)
    }
}
