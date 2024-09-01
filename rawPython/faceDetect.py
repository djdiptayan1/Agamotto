import os
import cv2
from facenet_pytorch import MTCNN
from tqdm import tqdm
import torch

DATASET_PATH = (
    "/Users/djdiptayan/Documents/Developer/SIH24/raw_python/FaceSwap/videos"
)
FACE_SAVE_PATH = (
    "/Users/djdiptayan/Documents/Developer/SIH24/raw_python/FaceSwap/cropped"
)
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

print(f"Using device: {DEVICE}")

mtcnn = MTCNN(keep_all=False, select_largest=True, device=DEVICE)


def extract_faces(video_path, save_path, label, num_frames=10):
    cap = cv2.VideoCapture(video_path)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_interval = max(frame_count // num_frames, 1)

    count = 0
    extracted_frames = 0

    while cap.isOpened() and extracted_frames < num_frames:
        ret, frame = cap.read()
        if not ret:
            break

        if count % frame_interval == 0:
            boxes, _ = mtcnn.detect(frame)
            if boxes is not None:
                for i, box in enumerate(boxes):
                    x1, y1, x2, y2 = [int(b) for b in box]

                    # Ensure the bounding box is within the frame's dimensions
                    x1 = max(0, x1)
                    y1 = max(0, y1)
                    x2 = min(frame.shape[1], x2)
                    y2 = min(frame.shape[0], y2)

                    face = frame[y1:y2, x1:x2]

                    # Only save the face if the cropped area is not empty
                    if face.size > 0:
                        face_filename = os.path.join(
                            save_path, f"{label}{count}_{i}.jpg"
                        )
                        cv2.imwrite(face_filename, face)
                extracted_frames += 1
        count += 1

    cap.release()


os.makedirs(FACE_SAVE_PATH, exist_ok=True)
videos = os.listdir(DATASET_PATH)

for video in tqdm(videos, desc="Extracting faces"):
    video_name = os.path.splitext(video)[0]
    video_save_path = os.path.join(FACE_SAVE_PATH, video_name)
    os.makedirs(video_save_path, exist_ok=True)
    extract_faces(os.path.join(DATASET_PATH, video), video_save_path, label="face")
