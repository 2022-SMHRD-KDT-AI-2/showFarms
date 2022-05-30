package com.example.streamapp.list

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.streamapp.R
import com.example.streamapp.camera.CameraActivity
import com.example.streamapp.databinding.SalesItemBinding

class SalesListAdapter(private val context: Context):
    RecyclerView.Adapter<SalesListAdapter.ViewHolder>() {
    var data = mutableListOf<PostVO>()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SalesListAdapter.ViewHolder {
        val binding = SalesItemBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: SalesListAdapter.ViewHolder, position: Int) {
        holder.bind(data[position])
    }

    override fun getItemCount(): Int = data.size

    inner class ViewHolder(private val binding: SalesItemBinding): RecyclerView.ViewHolder(binding.root) {
        private val img: ImageView = itemView.findViewById(R.id.imageViewTitleImage)
        private val title = binding.textViewTitle
        private val price = binding.textViewPrice
        private val unit = binding.textViewUnit
        private val shipment = binding.textViewShipment
        private val button = binding.buttonCameraStart

        fun bind(item: PostVO) {
            Glide.with(context).load("http://121.147.185.200:8081/images/" + item.post_img).into(img)
            title.text = item.post_title
            price.text = item.post_price
            unit.text = item.post_unit
            shipment.text = item.post_shipping
            button.setOnClickListener{
                val intent = Intent(context, CameraActivity::class.java)
                intent.putExtra("url", item.post_id)
                context.startActivity(intent)
            }
        }
    }
}