package com.example.streamapp

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.util.Log.INFO
import androidx.core.app.ActivityCompat
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.example.streamapp.databinding.ActivityMainBinding
import com.example.streamapp.list.SalesListActivity
import org.json.JSONObject

//login activity

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    lateinit var requestQueue: RequestQueue

    private val PERMISSIONS = arrayOf(
        Manifest.permission.RECORD_AUDIO, Manifest.permission.CAMERA,
        Manifest.permission.WRITE_EXTERNAL_STORAGE
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        requestQueue = Volley.newRequestQueue(applicationContext)

        if (!hasPermissions(this, *PERMISSIONS)) {
            ActivityCompat.requestPermissions(this, PERMISSIONS, 1)
        }

        hideSystemUI(window)

        val params = HashMap<String, String>()
        //params["mb_id"] = binding.editTextId.toString()
        params["mb_id"] = "hyeseong"
        //params["mb_pw"] = binding.editTextTextPassword.toString()
        params["mb_pw"] = "asdf1234"
        val json = (params as Map<*, *>?)?.let { JSONObject(it) }

        binding.ButtonLogin.setOnClickListener {
            val request = JsonObjectRequest(Request.Method.POST,"http://121.147.185.200:8081/users/login",json,
                { res ->
                    Log.i("login", res.toString())
                },
                {
                })
            requestQueue.add(request)


            val intent: Intent = Intent(this@MainActivity, SalesListActivity::class.java)
            intent.putExtra("id", "hyeseong")
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