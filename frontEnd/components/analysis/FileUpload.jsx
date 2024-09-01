"use client";
import React, { useState } from "react";
import axios from "axios";
import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadCard() {
    const [file, setFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false); // State to control video preview display

    const handleFileUpload = (files) => {
        if (files.length > 0) {
            setFile(files[0]); // Set the file without uploading
            setUploadMessage(""); // Clear any previous messages
            setShowPreview(false); // Hide the preview when a new file is selected
        }
    };

    const uploadFile = async () => {
        if (!file) {
            setUploadMessage("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setIsLoading(true); // Start the loading process
        setShowPreview(true); // Show the video preview

        try {
            const response = await axios.post("http://192.168.29.50:3001/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setUploadMessage(response.data.message || "File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error.response ? error.response.data : error.message);

            if (error.response && error.response.data.error === "No faces detected") {
                setUploadMessage("No face detected");
            } else {
                setUploadMessage("Failed to upload file.");
            }
        } finally {
            setIsLoading(false); // End the loading process
        }
    };

    const handleNewFileUpload = () => {
        setFile(null); // Clear the current file
        setUploadMessage(""); // Clear any messages
        setShowPreview(false); // Hide the preview when uploading a new file
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <FileUpload onChange={handleFileUpload} />

            {/* Show buttons if a file is selected */}
            {file && !isLoading && (
                <div className="mt-4 flex justify-center space-x-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={uploadFile}
                    >
                        Start Detection
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={handleNewFileUpload}
                    >
                        Upload New File
                    </button>
                </div>
            )}

            {/* Video Preview Container - Only display when showPreview is true */}
            {file && showPreview && (
                <div className="video-preview-container mt-6 p-4 bg-black">
                    <video
                        controls
                        autoPlay
                        loop
                        muted={false} // Set to false to allow sound
                        className="w-96 h-96 mx-auto"
                    >
                        <source src={URL.createObjectURL(file)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Display loader while the video is being processed */}
            {isLoading && (
                <div className="mt-4 text-center text-yellow-500">
                    Processing video...
                </div>
            )}

            {/* Display upload message if it exists */}
            {!isLoading && uploadMessage && (
                <div
                    className={`mt-4 text-center ${uploadMessage === "Real Video"
                        ? "text-green-500"
                        : "text-red-500 font-bold"
                        } text-5xl font-mono font-extrabold`}
                >
                    {uploadMessage}
                </div>
            )}
        </div>
    );
}