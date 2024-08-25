import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaBook } from 'react-icons/fa';
import "./ViewPage.css";

const ViewPage = () => {
    
  const [filename, setFilename] = useState("");
  const fullFilename = `${filename}.pdf`;
  const handleView = async () => {
    try {
      const response = await axios.get(`/stud/view/${fullFilename}`, { responseType: "blob" });

      // Create a blob URL and open it in a new tab
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
      alert("Error viewing file");
    }
  };

  return (
    <div className="view-page-container">
      <h3>View Syllabus&nbsp;<FaEye /></h3>
      <div className="input-container">
      <input
        type="text"
        placeholder="Enter Subject Name"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      /> 
      </div> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleView}>View <FaBook /></button>
     
      
    </div>
  );
};

export default ViewPage;
