package com.example.app

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import com.example.app.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private val targetUrlArr: Array<String> = arrayOf("kakao", "naver", "google")

    // for view binding
    lateinit var binding: ActivityMainBinding
    lateinit var buttonArr: Array<Button>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // for view binding
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        buttonArr =
            arrayOf(binding.kakaoLoginButton, binding.naverLoginButton, binding.googleLoginButton)
        buttonArr.forEachIndexed { index, button ->
            run {
                button.setOnClickListener {
                    Log.i("url", targetUrlArr[index])
                }
            }
        }
    }
}