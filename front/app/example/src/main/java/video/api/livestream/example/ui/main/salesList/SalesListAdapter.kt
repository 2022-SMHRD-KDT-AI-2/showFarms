package video.api.livestream.example.ui.main.salesList

import android.content.Context
import android.content.Intent
import android.util.Log
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import video.api.livestream.app.R
import video.api.livestream.app.databinding.SalesItemBinding
import video.api.livestream.example.ui.main.MainActivity

class SalesListAdapter(private val context: Context):
    RecyclerView.Adapter<SalesListAdapter.ViewHolder>() {
    var data = mutableListOf<SalesListItem>()

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

        fun bind(item: SalesListItem) {
            img.setImageResource(item.img)
            title.text = item.title
            price.text = item.price.toString()
            unit.text = item.unit
            shipment.text = item.shipmentFee
            button.setOnClickListener{
                Log.i("state", "click")
                val intent = Intent(context, MainActivity::class.java)
                context.startActivity(intent)
            }
        }
    }
}