import React, { useState } from "react";
import axios from "axios";
import { FaDownload, FaBook } from 'react-icons/fa';
import "./DownloadPage.css";
const DownloadPage = () => {
  const [filename, setFilename] = useState("");

  const handleDownload = async () => {
    try {
        const fullFilename = `${filename}.pdf`;
      const response = await axios.get(`https://student-server-tamd.onrender.com/stud/download/${encodeURIComponent(fullFilename)}`, {
        responseType: 'arraybuffer', // Set responseType to 'arraybuffer'
      });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
      alert("Error downloading file");
    }
  };

  return (
    <div className="second-component-container">
      <h3>Download Syllabus &nbsp;<FaDownload /></h3>
      <div className="input-container">
      <input
        type="text"
        placeholder="Enter Subject Name"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      /> 
      </div>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleDownload}>Download <FaBook /></button>
    </div>
  );
};

export default DownloadPage;
