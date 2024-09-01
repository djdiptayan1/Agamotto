import os
import cv2
from facenet_pytorch import MTCNN
import torch
import tensorflow as tf
import random
import numpy as np

# Paths and device configuration
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {DEVICE}")



class_names = {
    0: "Real Video",
    1: "Face2Face",
    2: "DeepfakeDetection",
    3: "FaceShifter",
    4: "Neural Textures",
    5: "FaceSwap"
}

# Initialize MTCNN for face detection
mtcnn = MTCNN(keep_all=False, select_largest=True, device=DEVICE)

# Load your pre-trained model
model = tf.keras.models.load_model('DF_2.keras')

# Function to extract faces and classify the video
def extract_faces_and_classify(video_path, num_frames=10):
    # Preprocess a single frame
    def preprocess_frame(frame):
        frame = tf.image.resize(frame, (256, 256))  # Resize if necessary
        # frame = frame / 255.0  # Normalize if necessary
        return np.expand_dims(frame, axis=0)

    cap = cv2.VideoCapture(video_path)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_interval = max(frame_count // num_frames, 1)

    count = 0
    face_frames = []

    while cap.isOpened() and len(face_frames) < num_frames:
        ret, frame = cap.read()
        if not ret:
            break

        if count % frame_interval == 0:
            boxes, _ = mtcnn.detect(frame)
            if boxes is not None:
                for box in boxes:
                    x1, y1, x2, y2 = [int(b) for b in box]

                    # Ensure the bounding box is within the frame's dimensions
                    x1 = max(0, x1)
                    y1 = max(0, y1)
                    x2 = min(frame.shape[1], x2)
                    y2 = min(frame.shape[0], y2)

                    face = frame[y1:y2, x1:x2]

                    # Only add the face to the list if the cropped area is not empty
                    if face.size > 0:
                        face_frames.append(face)
        count += 1

    cap.release()

    # If no faces were detected in any frame, return None
    if len(face_frames) == 0:
        return None

    # Select a random face frame
    random_frame = random.choice(face_frames)

    # Preprocess the selected frame
    preprocessed_frame = preprocess_frame(random_frame)

    # Predict the class using the model
    prediction = model.predict(preprocessed_frame)
    predicted_class = np.argmax(prediction, axis=1)[0]
    return predicted_class

# Example usage: Classify a single video
video_path = 'sample.mp4'  # Replace with your video path
predicted_class = extract_faces_and_classify(video_path)
predicted_class_name = class_names[predicted_class]

if predicted_class is not None:
    print(f'The predicted class for the video is: {predicted_class}')
    print(f"Predicted class name: {predicted_class_name}")
else:
    print('No faces detected in the video.')
