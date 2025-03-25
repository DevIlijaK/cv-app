"use client";

import { useState } from "react";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { saveFile } from "../../../server/functions";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("idle"); // idle, uploading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData) {
    try {
      setStatus("uploading");
      const result = await saveFile(formData);
      setStatus("success");
      console.log("File saved at:", result.filePath);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to upload file"
      );
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      const formData = new FormData();
      formData.append("file", file);
      handleSubmit(formData);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const formData = new FormData();
      formData.append("file", file);
      handleSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Upload Audio File
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Drop your audio file here or click to browse
          </p>
        </div>

        <div
          className={`mt-8 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg
            ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            ${status === "error" ? "border-red-500 bg-red-50" : ""}
            ${status === "success" ? "border-green-500 bg-green-50" : ""}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="space-y-4 text-center">
            {status === "idle" && (
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400" />
                <label className="mt-4 cursor-pointer">
                  <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Select File
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="audio/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            )}

            {status === "uploading" && (
              <div className="flex flex-col items-center">
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
                <p className="mt-2 text-sm text-gray-500">
                  Uploading {fileName}...
                </p>
              </div>
            )}

            {status === "success" && (
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <p className="mt-2 text-sm text-green-600">
                  Successfully uploaded {fileName}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Upload Another
                </button>
              </div>
            )}

            {status === "error" && (
              <div className="flex flex-col items-center">
                <AlertCircle className="h-12 w-12 text-red-500" />
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
