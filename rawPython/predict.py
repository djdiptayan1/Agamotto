import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model

class_names = {
    0: "Real Video",
    1: "Face2Face",
    2: "DeepfakeDetection",
    3: "FaceShifter",
    4: "Neural Textures",
    5: "FaceSwap"
}


img_path = '/Users/srijit/Documents/Projects/SIH/DATASETS/Youtube/VQ6L4_TBrnE/face_1.jpg'
img = image.load_img(img_path, target_size=(256, 256))  
img_array = image.img_to_array(img)


img_array = np.expand_dims(img_array, axis=0) 


best_model = load_model('/Users/srijit/Documents/Projects/SIH/DF_2.keras',compile=False)

prediction = best_model.predict(img_array)


predicted_class_index = np.argmax(prediction, axis=1)[0]

# Get the predicted class name
predicted_class_name = class_names[predicted_class_index]

# Print the predicted class name
print(f"Predicted class index: {predicted_class_index}")
print(f"Predicted class name: {predicted_class_name}")


if(predicted_class_index!=0):
    print ("Deepfake Detected")
else:
    print("Real Video")