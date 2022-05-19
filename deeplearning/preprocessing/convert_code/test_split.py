import shutil
import os

file_source = 'C:/Users/smhrd/Desktop/YOLOv5/yolov5/data/labels/train'
file_destination = 'C:/Users/smhrd/Desktop/YOLOv5/yolov5/data/labels/test'
txt_path = 'C:/Users/smhrd/Desktop/YOLOv5/yolov5/data/txt'

txt = os.path.join(txt_path, 'test.txt')
test_txt = open(txt)


get_total = os.listdir(file_source)
get_test = "".join(list(test_txt))

for g in get_total:
    if g[:-4] in get_test:
        file_name = file_source+"/"+g
        print(file_name)
        shutil.move(file_name, file_destination)