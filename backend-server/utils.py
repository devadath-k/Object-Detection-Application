import cv2
import os

config_file= 'models/ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt'
frozen_model= 'models/frozen_inference_graph.pb'
model= cv2.dnn_DetectionModel(frozen_model, config_file)
classLabels= []
file_name='models/labels.txt'
with open(file_name, 'rt') as fpt:
    classLabels= fpt.read().rstrip('\n').split('\n')
model.setInputSize(320, 320)
model.setInputScale(1.0/127.5)
model.setInputMean((127.5, 127.5, 127.5))
model.setInputSwapRB(True)

def detect_and_draw_box(file_path, filename):
    img= cv2.imread(file_path)
    classIndex, confidence, bbox= model.detect(img, confThreshold= 0.5)
    font_scale = 0.5
    font= cv2.FONT_HERSHEY_SIMPLEX
    for classInd, conf, boxes in zip(classIndex.flatten(), confidence.flatten(), bbox):
        if conf> 0.6:
            cv2.rectangle(img, boxes, (0, 255, 0), 2)

            label = f'{classLabels[classInd-1]}'
            label_size, _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2)
            cv2.rectangle(img, (boxes[0], boxes[1]-label_size[1]-5), (boxes[0]+label_size[0], boxes[1]), (0, 255, 0), cv2.FILLED)
            cv2.putText(img, label, (boxes[0], boxes[1]-5), font, fontScale= font_scale, color= (255, 255, 255), thickness=2)

    processed_file_path = os.path.join('static/processed_images', filename)
    cv2.imwrite(processed_file_path, img)

