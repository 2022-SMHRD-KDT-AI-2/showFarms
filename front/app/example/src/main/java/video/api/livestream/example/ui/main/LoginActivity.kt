package video.api.livestream.example.ui.main

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import com.example.app.hideSystemUI
import video.api.livestream.app.R
import video.api.livestream.app.databinding.ActivityLoginBinding
import video.api.livestream.example.ui.main.salesList.SalesListActivity

class LoginActivity : AppCompatActivity() {
    lateinit var binding: ActivityLoginBinding
    private val targetUrlArr: Array<String> = arrayOf("kakao", "naver", "google")
    lateinit var buttonArr: Array<Button>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        hideSystemUI(window)

        buttonArr =
            arrayOf(binding.buttonLoginKakao, binding.buttonLoginNaver, binding.buttonLoginGoogle)
        buttonArr.forEachIndexed { index, button ->
            run {
                button.setOnClickListener {
                    Log.i("url", targetUrlArr[index])
                    val intent: Intent = Intent(this@LoginActivity, SalesListActivity::class.java)
                    startActivity(intent)
                }
            }
        }
    }
}