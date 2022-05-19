# import library
import os
from random import sample

# Full or absolute path to the folder with images
full_path_to_images = \
    'C:\\Users\\smhrd\\Desktop\\YOLOv5\\yolov5\\data\\images\\train'

# Changing the current directory
# to one with images
os.chdir(full_path_to_images)

# Check point
# Getting the current directory
print("current path : ", os.getcwd())

# Defining list to write paths in
l_lst = []
m_lst = []
s_lst = []
total = []

# Using os.walk for going through all directories
for current_dir, dirs, files in os.walk('.'):
    # Going through all files
    for f in files:
        # Checking if filename ends with '.png'
        if f.endswith('.png'):
            # Preparing path to save into train.txt file
            path_to_save_into_txt_files = full_path_to_images + '/' + f
            file = path_to_save_into_txt_files + '\n'
            # Appending the line into the list
            # check rank of the image
            if "_L_" in f:
                l_lst.append(file)
            elif "_M_" in f:
                m_lst.append(file)
            else:
                s_lst.append(file)

            total.append(file)

# poo the test sample from train with same ration
p_test = sample(l_lst, 340) + sample(m_lst, 340) + sample(s_lst, 340)
print("test set : ", p_test)
print(len(p_test))

# Deleting from initial list first 15% of elements
p_train = [x for x in total if x not in p_test]
print("train set : ", p_test)
print(len(p_train))

"""
End of:
Getting list of full paths to downloaded images
"""


"""
Start of:
Creating train.txt and test.txt files
"""

# Creating file train.txt and writing 85% of lines in it
with open('train.txt', 'w') as train_txt:
    # Going through all elements of the list
    for e in p_train:
        # Writing current path at the end of the file
        train_txt.write(e)

# Creating file test.txt and writing 15% of lines in it
with open('test.txt', 'w') as test_txt:
    # Going through all elements of the list
    for e in p_test:
        # Writing current path at the end of the file
        test_txt.write(e)

"""
End of:
Creating train.txt and test.txt files
"""
