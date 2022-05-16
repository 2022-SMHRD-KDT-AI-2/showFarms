package video.api.livestream.example.ui.main.salesList

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.app.hideSystemUI
import video.api.livestream.app.R
import video.api.livestream.app.databinding.ActivitySalseListBinding

class SalesListActivity : AppCompatActivity() {
    lateinit var adapter: SalesListAdapter
    private lateinit var binding: ActivitySalseListBinding
    private val data = mutableListOf<SalesListItem>()

    @SuppressLint("NotifyDataSetChanged")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySalseListBinding.inflate(layoutInflater)
        setContentView(binding.root)

        data.apply {
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