import os
import cv2
import random
import numpy as np
# from pixellib.tune_bg import alter_bg

# test_path = "C:/Users/smhrd/Desktop/YOLOv5/yolov5/data/images/test"
# back_path = "C:/Users/smhrd/Desktop/YOLOv5/convert/background"
# store_path = "C:/Users/smhrd/Desktop/YOLOv5/yolov5/data/images/test_bg/"
#
# get_test = os.listdir(test_path)
# get_back = os.listdir(back_path)
#

# image load
import matplotlib.pyplot as plt

image_bgr = cv2.imread('C:/Users/smhrd/Desktop/YOLOv5/convert/test.png', cv2.IMREAD_COLOR)

# Change to RGB type
image_rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)

hh, ww = image_rgb.shape[:2]
# threshold on white
# Define lower and uppper limits
lower = np.array([200, 200, 200])
upper = np.array([255, 255, 255])

# Create mask to only select black
thresh = cv2.inRange(image_rgb, lower, upper)

# apply morphology
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (20,20))
morph = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)

# invert morp image
mask = 255 - morph

# apply mask to image
result = cv2.bitwise_and(image_rgb, image_rgb, mask=mask)

#cv2.imwrite('remove.jpg', result)
# cv2.imshow('result', result)


#plot
plt.imshow(result)
plt.show()

# store
# cv2.imwrite('C:/Users/smhrd/Desktop/YOLOv5/convert/result.jpg', result)