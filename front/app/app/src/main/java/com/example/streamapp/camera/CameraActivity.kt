package com.example.streamapp.camera

import android.os.Build
import android.os.Bundle
import android.view.SurfaceHolder
import android.view.View
import android.view.WindowManager
import androidx.appcompat.app.AppCompatActivity
import com.example.streamapp.databinding.ActivityCameraBinding
import com.pedro.encoder.input.video.CameraHelper
import com.pedro.encoder.video.FormatVideoEncoder
import com.pedro.rtmp.utils.ConnectCheckerRtmp
import com.pedro.rtplibrary.rtmp.RtmpCamera1

class CameraActivity : AppCompatActivity(), ConnectCheckerRtmp, SurfaceHolder.Callback,
    View.OnClickListener {
    lateinit var rtmpCamera1: RtmpCamera1
    private val binding: ActivityCameraBinding by lazy {
        ActivityCameraBinding.inflate(layoutInflater)
    }
    lateinit var url: String
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        setContentView(binding.root)

        supportActionBar!!.setDisplayHomeAsUpEnabled(true)
        supportActionBar!!.setHomeButtonEnabled(true)

        binding.surfaceView.holder.addCallback(this)
        rtmpCamera1 = RtmpCamera1(binding.surfaceView, this)
        binding.ButtonStart.setOnClickListener(this)

        url = intent.getStringExtra("url")!!

    }

    override fun onPostCreate(savedInstanceState: Bundle?) {
        super.onPostCreate(savedInstanceState)
    }


    override fun onAuthErrorRtmp() {
    }
    override fun onAuthSuccessRtmp() {
    }
    override fun onConnectionStartedRtmp(rtmpUrl: String) {
    }
    override fun onConnectionSuccessRtmp() {
    }
    override fun onConnectionFailedRtmp(reason: String) {
    }
    override fun onNewBitrateRtmp(bitrate: Long) {
    }
    override fun surfaceCreated(p0: SurfaceHolder) {
    }
    override fun onDisconnectRtmp() {
        runOnUiThread {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR2
                && rtmpCamera1.isRecording()
            ) {
                rtmpCamera1.stopRecord()
            }
        }
    }

    override fun surfaceChanged(p0: SurfaceHolder, p1: Int, p2: Int, p3: Int) {
        rtmpCamera1.startPreview()
    }

    override fun surfaceDestroyed(p0: SurfaceHolder) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR2) {
            rtmpCamera1.stopRecord()
        }
        if (rtmpCamera1.isStreaming) {
            rtmpCamera1.stopStream()
        }
        rtmpCamera1.stopPreview()
    }

    override fun onClick(p0: View?) {
        if (!rtmpCamera1.isStreaming) {
            binding.ButtonStart.text = "Stream Stop"
            rtmpCamera1.prepareVideo(640, 480, 30, 1200 * 1024, 2, 90, 0,
                1)
            rtmpCamera1.prepareAudio(
                128 * 1024,
                44100,
                true)
            rtmpCamera1.startStream(url)
        } else {
            binding.ButtonStart.text = "Stream Start"
            rtmpCamera1.stopStream()
        }
    }
}