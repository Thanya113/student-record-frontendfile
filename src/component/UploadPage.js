// UploadPage.js

import React, { useState } from "react";
import axios from "axios";
import { FaUpload,FaBook } from 'react-icons/fa';
import "./UploadPage.css";
const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      await axios.post("https://student-server-tamd.onrender.com/faculty/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("File uploaded successfully for faculty!");
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="upload-page-container">
      <h3>Upload Syllabus&nbsp;<FaUpload /></h3>
      <input type="file" onChange={handleFileChange} />
      <br /><br/>
      <button onClick={handleUpload}>Upload <FaBook /></button>
    </div>
  );
};

export default UploadPage;
