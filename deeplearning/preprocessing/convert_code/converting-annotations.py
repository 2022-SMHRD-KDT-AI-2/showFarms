import pandas as pd
import os


"""
Start of:
Setting up full paths to directories
"""

# Full or absolute path to the folder with csv annotation files
full_path_to_csv = 'C:\\Users\\smhrd\\Desktop\\YOLOv5\\yolov5\\data\\labels\\validation'

# Full or absolute path to the folder with images
full_path_to_images ='C:\\Users\\smhrd\\Desktop\\YOLOv5\\yolov5\\data\\images\\validation'

"""
End of:
Setting up full paths to directories
"""


"""
Start of:
List of classes' names
"""

# Defining list for names of classes
label = ['high', 'medium', 'low']

"""
End of:
List of classes' names
"""


"""
Start of:
Getting encrypted strings of classes' names
"""

# Reading csv file with classes' names
classes = pd.read_csv(full_path_to_csv + '/' + 'farms_label.csv',
                      usecols=[0, 1], header=None)

# Check point
# Showing first 5 rows from the dataFrame
# print(classes.head())

"""
End of:
Getting encrypted strings of classes' names
"""


"""
Start of:
Getting Pandas dataFrame with annotations that has only needed rows
"""

# Reading csv file with annotations
# Loading only needed columns into Pandas dataFrame
annotations = pd.read_csv(full_path_to_csv + '/' + 'farms_label.csv',
                          usecols=['ImageID',
                                   'LabelName',
                                   'XMin',
                                   'XMax',
                                   'YMin',
                                   'YMax'])

# Check point
# Showing first 5 rows from the dataFrame
# print(annotations.head())

# Getting Pandas dataFrame that has only needed rowsd
sub_ann = annotations.loc[annotations['LabelName'].isin(label)].copy()

# Check point
# Showing first 5 rows from the dataFrame
# print()
# print(sub_ann.head())

"""
End of:
Getting Pandas dataFrame with annotations that has only needed rows
"""


"""
Start of:
Calculating numbers for YOLO format
"""

# Adding new empty columns to dataFrame to save numbers for YOLO format
sub_ann['classNumber'] = ''
sub_ann['center x'] = ''
sub_ann['center y'] = ''
sub_ann['width'] = ''
sub_ann['height'] = ''

# Going through all encrypted classes' strings
# and converting them to numbers
# according to the order they are in the list
for i in range(len(label)):
    # Writing numbers into appropriate column
    sub_ann.loc[sub_ann['LabelName'] == label[i], 'classNumber'] = i

# Calculating bounding box's center in x and y for all rows
# Saving results to appropriate columns
sub_ann['center x'] = (sub_ann['XMax'] + sub_ann['XMin']) / (2*1000)
sub_ann['center y'] = (sub_ann['YMax'] + sub_ann['YMin']) / (2*1000)

# Calculating bounding box's width and height for all rows
# Saving results to appropriate columns
sub_ann['width'] = (sub_ann['XMax'] - sub_ann['XMin'])/1000
sub_ann['height'] = (sub_ann['YMax'] - sub_ann['YMin'])/1000

# Getting Pandas dataFrame that has only needed columns
r = sub_ann.loc[:, ['ImageID',
                    'classNumber',
                    'center x',
                    'center y',
                    'width',
                    'height']].copy()

# Check point
# Showing first 5 rows from the dataFrame
# print(r.head())

"""
End of:
Calculating numbers for YOLO format
"""


"""
Start of:
Saving annotations in txt files
"""
# Getting the current directory
os.chdir(full_path_to_images)
#
# Check point
# Getting the current directory
# print(os.getcwd())

# Using os.walk for going through all directories
for current_dir, dirs, files in os.walk('.'):
    # Going through all files
    for f in files:
        # Checking if filename ends with '.jpg'
        if f.endswith('.png'):
            # Slicing only name of the file without extension
            image_name = f[:-4]
            # Getting Pandas dataFrame that has only needed rows
            sub_r = r.loc[r['ImageID'] == image_name]

            # Getting resulted Pandas dataFrame that has only needed columns
            resulted_frame = sub_r.loc[:, ['classNumber',
                                           'center x',
                                           'center y',
                                           'width',
                                           'height']].copy()

            # Preparing path where to save txt file
            path_to_save = full_path_to_csv + '/' + image_name + '.txt'

            # Saving resulted Pandas dataFrame into txt file
            resulted_frame.to_csv(path_to_save, header=False, index=False, sep=' ')

"""
End of:
Saving annotations in txt files
"""