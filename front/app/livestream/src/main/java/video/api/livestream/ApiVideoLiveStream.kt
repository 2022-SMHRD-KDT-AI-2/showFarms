package video.api.livestream

import android.Manifest
import android.annotation.SuppressLint
import android.content.Context
import android.util.Log
import android.view.SurfaceHolder
import androidx.annotation.RequiresPermission
import io.github.thibaultbee.streampack.error.StreamPackError
import io.github.thibaultbee.streampack.ext.rtmp.streamers.CameraRtmpLiveStreamer
import io.github.thibaultbee.streampack.listeners.OnConnectionListener
import io.github.thibaultbee.streampack.listeners.OnErrorListener
import io.github.thibaultbee.streampack.utils.*
import io.github.thibaultbee.streampack.views.getPreviewOutputSize
import kotlinx.coroutines.runBlocking
import video.api.livestream.enums.CameraFacingDirection
import video.api.livestream.interfaces.IConnectionChecker
import video.api.livestream.models.AudioConfig
import video.api.livestream.models.VideoConfig
import video.api.livestream.views.ApiVideoView

/**
 * Manages both livestream and camera preview.
 */
class ApiVideoLiveStream
/**
 * @param context application context
 * @param connectionChecker connection callbacks
 * @param initialAudioConfig initial audio configuration. Could be change later with [audioConfig] field.
 * @param initialVideoConfig initial video configuration. Could be change later with [videoConfig] field.
 * @param initialCamera initial camera. Could be change later with [camera] field.
 * @param apiVideoView where to display preview. Could be null if you don't have a preview.
 */
@RequiresPermission(allOf = [Manifest.permission.RECORD_AUDIO, Manifest.permission.CAMERA])
constructor(
    private val context: Context,
    private val connectionChecker: IConnectionChecker,
    private val initialAudioConfig: AudioConfig,
    private val initialVideoConfig: VideoConfig,
    private val initialCamera: CameraFacingDirection = CameraFacingDirection.BACK,
    private val apiVideoView: ApiVideoView
) {
    companion object {
        private const val TAG = "ApiVideoLiveStream"
    }

    /**
     * Set/get audio configuration once you have created the a [ApiVideoLiveStream] instance.
     */
    var audioConfig: AudioConfig = initialAudioConfig
        @RequiresPermission(Manifest.permission.RECORD_AUDIO)
        set(value) {
            if (isStreaming) {
                throw UnsupportedOperationException("You have to stop streaming first")
            }
            streamer.configure(value.toSdkConfig())
            field = value
        }

    /**
     * Set/get video configuration once you have created the a [ApiVideoLiveStream] instance.
     */
    var videoConfig: VideoConfig = initialVideoConfig
        /**
         * Set new video configuration.
         * It will restart preview if resolution has been changed.
         * Encoders settings will be applied in next [startStreaming].
         *
         * @param value new video configuration
         */
        @RequiresPermission(allOf = [Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO])
        set(value) {
            if (isStreaming) {
                throw UnsupportedOperationException("You have to stop streaming first")
            }
            if (videoConfig.resolution != value.resolution) {
                Log.i(
                    this::class.simpleName,
                    "Resolution has been changed from ${videoConfig.resolution} to ${value.resolution}. Restarting preview."
                )
                stopPreview()
                streamer.configure(value.toSdkConfig())
                streamer.startPreview(apiVideoView.holder.surface)
            }
            field = value
        }

    private val connectionListener = object : OnConnectionListener {
        override fun onFailed(message: String) {
            connectionChecker.onConnectionFailed(message)
        }

        override fun onLost(message: String) {
            connectionChecker.onDisconnect()
        }

        override fun onSuccess() {
            connectionChecker.onConnectionSuccess()
        }
    }

    private val errorListener = object : OnErrorListener {
        override fun onError(error: StreamPackError) {
            _isStreaming = false
            Log.e(TAG, "An error happened", error)
        }
    }

    /**
     * [SurfaceHolder.Callback] implementation.
     */
    private val surfaceCallback = object : SurfaceHolder.Callback {
        /**
         * Calls when the provided surface is created. This is for internal purpose only. Do not call it.
         */
        @SuppressLint("MissingPermission")
        override fun surfaceCreated(holder: SurfaceHolder) {
            // Selects appropriate preview size and configures view finder
            streamer.camera.let {
                val previewSize = getPreviewOutputSize(
                    apiVideoView.display,
                    context.getCameraCharacteristics(it),
                    SurfaceHolder::class.java
                )
                Log.d(
                    TAG,
                    "View finder size: ${apiVideoView.width} x ${apiVideoView.height}"
                )
                Log.d(TAG, "Selected preview size: $previewSize")
                apiVideoView.setAspectRatio(previewSize.width, previewSize.height)

                // To ensure that size is set, initialize camera in the view's thread
                apiVideoView.post { streamer.startPreview(apiVideoView.holder.surface) }
            }
        }

        /**
         * Calls when the surface size has been changed. This is for internal purpose only. Do not call it.
         */
        override fun surfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) =
            Unit

        /**
         * Calls when the surface size has been destroyed. This is for internal purpose only. Do not call it.
         */
        override fun surfaceDestroyed(holder: SurfaceHolder) {
            stopStreaming()
            stopPreview()
        }
    }

    private val streamer = CameraRtmpLiveStreamer(
        context = context,
        enableAudio = true,
        initialOnErrorListener = errorListener,
        initialOnConnectionListener = connectionListener
    )

    /**
     * Get/set video bitrate during a streaming in bps.
     * Value will be reset to provided [VideoConfig.startBitrate] for a new stream.
     */
    var videoBitrate: Int
        /**
         * Get video bitrate.
         *
         * @return video bitrate in bps
         */
        get() = streamer.settings.video.bitrate
        /**
         * Set video bitrate.
         *
         * @param value video bitrate in bps
         */
        set(value) {
            streamer.settings.video.bitrate = value
        }

    /**
     * Get/set current camera facing direction.
     */
    var camera: CameraFacingDirection
        /**
         * Get current camera facing direction.
         *
         * @return facing direction of the current camera
         */
        get() {
            return if (context.isFrontCamera(streamer.camera)) CameraFacingDirection.FRONT
            else CameraFacingDirection.BACK
        }
        /**
         * Set current camera facing direction.
         *
         * @param value camera facing direction
         */
        set(value) {
            if (((value == CameraFacingDirection.BACK) && (context.isFrontCamera(streamer.camera)))
                || ((value == CameraFacingDirection.FRONT) && (context.isBackCamera(streamer.camera)))
            ) {
                val cameraList = if (value == CameraFacingDirection.BACK) {
                    context.getBackCameraList()
                } else {
                    context.getFrontCameraList()
                }
                streamer.camera = cameraList[0]
            }
        }

    init {
        apiVideoView.holder.addCallback(surfaceCallback)
        streamer.configure(audioConfig.toSdkConfig(), videoConfig.toSdkConfig())
    }

    /**
     * Mute/Unmute microphone
     */
    var isMuted: Boolean
        /**
         * Get mute value.
         *
         * @return [Boolean.true] if audio is muted, [Boolean.false] if audio is not muted.
         */
        get() = streamer.settings.audio.isMuted
        /**
         * Set mute value.
         *
         * @param value [Boolean.true] to mute audio, [Boolean.false] to unmute audio.
         */
        set(value) {
            streamer.settings.audio.isMuted = value
        }

    /**
     * Start a new RTMP stream.
     *
     * @param streamKey RTMP stream key. For security purpose, you must not expose it.
     * @param url RTML Url. Default value (not set or null) is api.video RTMP broadcast url.
     * @see [stopStreaming]
     */
    fun startStreaming(
        streamKey: String,
        url: String = context.getString(R.string.default_rtmp_url),
    ) {
        if (isStreaming) {
            throw UnsupportedOperationException("Stream is already started")
        }
        if (streamKey.isEmpty()) {
            throw IllegalArgumentException("Stream key must not be empty")
        }

        runBlocking {
            streamer.startStream(url.addTrailingSlashIfNeeded() + streamKey)
            _isStreaming = true
        }
    }

    /**
     * Stops running stream.
     *
     * @see [startStreaming]
     */
    fun stopStreaming() {
        streamer.stopStream()
        _isStreaming = false
    }


    /**
     * Hack for private setter of [isStreaming].
     */
    private var _isStreaming: Boolean = false

    /**
     * Check the streaming state.
     *
     * @return true if you are streaming, false otherwise
     * @see [startStreaming]
     * @see [stopStreaming]
     */
    val isStreaming: Boolean
        get() = _isStreaming

    /**
     * Starts camera preview of [camera].
     *
     * The surface provided in the constructor already manages [startPreview] and [stopPreview].
     * Use this method only if you need to explicitly start preview.
     *
     * @see [stopPreview]
     */
    @RequiresPermission(Manifest.permission.CAMERA)
    fun startPreview() = streamer.startPreview(apiVideoView.holder.surface)

    /**
     * Stops camera preview.
     *
     * The surface provided in the constructor already manages [startPreview] and [stopPreview].
     * Use this method only if you need to explicitly stop preview.
     *
     * @see [startPreview]
     */
    fun stopPreview() = streamer.stopPreview()
}