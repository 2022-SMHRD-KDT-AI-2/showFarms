package com.example.streamapp

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import androidx.core.app.ActivityCompat
import com.example.streamapp.databinding.ActivityMainBinding
import com.example.streamapp.list.SalesListActivity

//login activity

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    private val targetUrlArr: Array<String> = arrayOf("kakao", "naver", "google")
    lateinit var buttonArr: Array<Button>
    private val PERMISSIONS = arrayOf(
        Manifest.permission.RECORD_AUDIO, Manifest.permission.CAMERA,
        Manifest.permission.WRITE_EXTERNAL_STORAGE
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        if (!hasPermissions(this, *PERMISSIONS)) {
            ActivityCompat.requestPermissions(this, PERMISSIONS, 1)
        }
        hideSystemUI(window)

        binding.ButtonLogin.setOnClickListener {
            val intent: Intent = Intent(this@MainActivity, SalesListActivity::class.java)
            startActivity(intent)
        }

    }
    private fun hasPermissions(context: Context?, vararg permissions: String): Boolean {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && context != null && permissions != null) {
            for (permission in permissions) {
                if (ActivityCompat.checkSelfPermission(context, permission)
                    != PackageManager.PERMISSION_GRANTED
                ) {
                    return false
                }
            }
        }
        return true
    }
}