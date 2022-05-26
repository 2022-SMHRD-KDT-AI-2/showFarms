from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import cv2

app = FastAPI()


# query parameter /video/?user={}&post_id={}
@app.get("/video")
async def main():
    return StreamingResponse(get_stream_video(), media_type="multipart/x-mixed-replace; boundary=frame")


# send request to spring server : stream start
async def stream_start(post_id, user):
    print(post_id, user)


# connect to web
def get_stream_video():
    url = "rtmp://172.30.1.36/live/"
    cam = cv2.VideoCapture(url + "test")

    ## detect.py -> url

    ## detect.py execute here

    while cam.isOpened():
        success, frame = cam.read()

        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
                   bytearray(frame) + b'\r\n')


# stream video save
def video_save():
    print("save")
