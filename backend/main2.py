import logging
from flask import Flask, request, jsonify
import os
from predict3 import extract_faces_and_classify
from flask_cors import CORS
import shutil

# Setup logging
logging.basicConfig(level=logging.INFO)

class_names = {
    0: "Real Video",
    1: "Face2Face",
    2: "DeepfakeDetection",
    3: "FaceShifter",
    4: "Neural Textures",
    5: "FaceSwap",
}

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


def clear_directory(directory):
    """Delete all files in the specified directory."""
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            app.logger.error(f"Failed to delete {file_path}. Reason: {e}")
            print(f"Failed to delete {file_path}. Reason: {e}")


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        app.logger.warning("No file part in request.")
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        app.logger.warning("No selected file.")
        return jsonify({"error": "No selected file"}), 400

    if file:
        file_path = f"./uploads/{file.filename}"
        file.save(file_path)
        uploads_folder = "./uploads"

        video_file = next(
            (f for f in os.listdir(uploads_folder) if f.endswith(".mp4")), None
        )
        video_path = os.path.join(uploads_folder, video_file) if video_file else None
        print(f"Fetched video path {video_path}")
        app.logger.info(f"Fetched video path {video_path}")

        try:
            # Perform prediction
            predicted_class = extract_faces_and_classify(video_path)
            if predicted_class is not None:
                predicted_class_name = class_names[predicted_class]
                print(f"The predicted class for the video is: {predicted_class}")
                print(f"Predicted class name: {predicted_class_name}")
                app.logger.info(
                    f"The predicted class for the video is: {predicted_class}"
                )
                app.logger.info(f"Predicted class name: {predicted_class_name}")
                return jsonify({"message": predicted_class_name}), 200
            else:
                app.logger.info("No faces detected in the video.")
                print("No faces detected in the video.")
                return jsonify({"error": "No faces detected"}), 400
        finally:
            clear_directory("./uploads")
            clear_directory("./output")
            app.logger.info(f"Cleaned up files from ./uploads and ./output")
            print(f"Cleaned up files from ./uploads and ./output")


if __name__ == "__main__":
    os.makedirs("./uploads", exist_ok=True)
    os.makedirs("./output", exist_ok=True)
    # app.run(debug=True, host="0.0.0.0", port=3001)