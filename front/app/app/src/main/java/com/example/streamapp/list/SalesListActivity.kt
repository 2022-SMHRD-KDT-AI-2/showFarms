package com.example.streamapp.list

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.streamapp.R
import com.example.streamapp.databinding.ActivitySalesListBinding
import com.example.streamapp.hideSystemUI

class SalesListActivity : AppCompatActivity() {
    lateinit var adapter: SalesListAdapter
    private lateinit var binding: ActivitySalesListBinding
    private val data = mutableListOf<SalesListItem>()

    @SuppressLint("NotifyDataSetChanged")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySalesListBinding.inflate(layoutInflater)
        setContentView(binding.root)

        data.apply {
            add(
                SalesListItem(
                    R.drawable.logo,
                    "asdf",
                    12000,
                    "zxcv",
                    "qwer",
                    "rtmp://172.30.1.59/live/test"
                )
            )
            add(
                SalesListItem(
                    R.drawable.logo,
                    "asdf",
                    12000,
                    "zxcv",
                    "qwer",
                    "asdf"
                )
            )
            add(
                SalesListItem(
                    R.drawable.logo,
                    "asdf",
                    12000,
                    "zxcv",
                    "qwer",
                    "asdf"
                )
            )
            add(
                SalesListItem(
                    R.drawable.logo,
                    "asdf",
                    12000,
                    "zxcv",
                    "qwer",
                    "asdf"
                )
            )
        }

        adapter = SalesListAdapter(this)
        adapter.data = data
        binding.recyclerViewSalesList.adapter = adapter
        binding.recyclerViewSalesList.layoutManager = LinearLayoutManager(this)
    }

    @SuppressLint("NotifyDataSetChanged")
    override fun onResume() {
        super.onResume()
        hideSystemUI(window)
    }
}