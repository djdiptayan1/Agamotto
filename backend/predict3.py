import os
import cv2
from facenet_pytorch import MTCNN
import torch
import tensorflow as tf
import random
import numpy as np
from PIL import Image

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

    output_folder = './output'
    extract_and_save_frame(video_path, output_folder, frame_number=400)

    # Convert to PIL Image and save without converting to BGR
   
    

    # Preprocess the selected frame
    preprocessed_frame = preprocess_frame(random_frame)

    # Predict the class using the model
    prediction = model.predict(preprocessed_frame)
    predicted_class = np.argmax(prediction, axis=1)[0]
    return predicted_class

def extract_and_save_frame(video_path, output_folder, frame_number=400):
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    
    # Check if the video opened successfully
    if not cap.isOpened():
        print("Error: Unable to open video file.")
        return

    # Set the frame position
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)
    
    # Read the specific frame
    ret, frame = cap.read()
    
    if not ret:
        print(f"Error: Unable to read frame {frame_number}.")
        cap.release()
        return

    # Ensure the output folder exists
    os.makedirs(output_folder, exist_ok=True)
    
    # Save the frame to the output folder
    output_path = os.path.join(output_folder, 'extracted_frame.png')
    
    # Convert the frame from BGR to RGB (if needed)
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    
    # Save the frame using PIL
    image = Image.fromarray(frame_rgb)
    image.save(output_path)
    
    # Release the video capture object
    cap.release()

    print(f"Frame {frame_number} saved to {output_path}")


def main():
    # video_path = '/Users/srijit/Documents/Projects/SIH/DeepFakeDetection/c23/videos/01_02__outside_talking_still_laughing__YVGY8LOK.mp4'  # Replace with your video path
    predicted_class = extract_faces_and_classify(video_path)
    if predicted_class is not None:
        predicted_class_name = class_names[predicted_class]
        print(f'The predicted class for the video is: {predicted_class}')
        print(f"Predicted class name: {predicted_class_name}")
    else:
        print('No faces detected in the video.')

if __name__ == "__main__":
    main()
