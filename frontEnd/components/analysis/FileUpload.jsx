"use client";
import React, { useState } from "react";
import axios from "axios";
import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadCard() {
    const [file, setFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to handle loading

    const handleFileUpload = (files) => {
        if (files.length > 0) {
            setFile(files[0]);
            uploadFile(files[0]); // Call the function to upload the selected file
        }
    };

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        setIsLoading(true); // Start the loading process

        try {
            const response = await axios.post('http://192.168.29.50:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Display the success message from the backend
            setUploadMessage(response.data.message || "File uploaded successfully!");
        } catch (error) {
            console.error('Error uploading file:', error.response ? error.response.data : error.message);

            // Check if the error message is "No faces detected" and set a custom message
            if (error.response && error.response.data.error === "No faces detected") {
                setUploadMessage("No face Detected"); // Display "No face" if no faces are detected
            } else {
                setUploadMessage("Failed to upload file."); // General error message
            }
        } finally {
            setIsLoading(false); // End the loading process
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload} />

            {/* Display loader while the video is being processed */}
            {isLoading && (
                <div className="mt-4 text-center text-yellow-500">
                    Processing video...
                </div>
            )}

            {/* Display upload message if it exists */}
            {!isLoading && uploadMessage && (
                <div
                    className={`mt-4 text-center ${uploadMessage === "Real Video" ? "text-green-500" : "text-red-500 font-bold"} text-5xl font-mono font-extrabold`}
                >
                    {uploadMessage}
                </div>
            )}
        </div>
    );
}