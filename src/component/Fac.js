import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import FacLogout from './FacLogout'; 
import UploadPage from './UploadPage';
import ViewPage from './ViewPage';
import DownloadPage from './DownloadPage';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"> </link>
const Container = styled.div`
/* Fac.css */
font-family: 'Poppins', sans-serif;
background-color: #c2d2bd;
color: ;
overflow: hidden;
position: relative;

.header {
  background-color: #45818e;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}




.main-content {
  max-width: 800px;
  margin: 20px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.faculty-details-container,
.fac-container {
  padding: 20px;
  margin-bottom: 20px;
}

.faculty-details-container {
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Add a Google Font link in your HTML file for the desired font-family */

body {
  font-family: 'Poppins', sans-serif; /* Replace with your desired font-family */
}

.fac-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #3498db;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #2c3e50;
  color: #fff;
}

th, td {
  padding: 12px;
  text-align: left;
}

tbody tr:nth-child(even) {
  background-color: #ecf0f1;
}

tbody tr:hover {
  background-color: #d5d8dc;
}
/* Style for buttons inside tbody */
tbody .send-results-button {
  background-color: #3498db;
  color: #fff;
  padding: 5px 15px;
  border: none;
  border-radius: 25px; /* Add border-radius for a curved button */
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease;
}

tbody .edit-results-button {
  background-color: #6ab0f3; /* Lighter shade for the second button */
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 25px; /* Add border-radius for a curved button */
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease;
  
}

tbody button:hover {
  background-color: #2c81ba;
}

.edit-results-container {
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.edit-results-container h2 {
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

.edit-results-container form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.edit-results-container label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold; /* Make labels bold */
}

.edit-results-container input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  font-family: 'Poppins', sans-serif; /* Replace with your desired font-family */
}

.edit-results-container button {
  background-color:#8e24aa;   /* Green color */
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 25px; /* Add border-radius for a curved button */
  cursor: pointer;
  font-family:  'Poppins', sans-serif;
  transition: background-color 0.3s ease;
  animation: pulse 4s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


.edit-results-container button:hover {
  background-color: #45a049; /* Darker green on hover */
}


/* Add these styles to your component or in a CSS file */
.faculty-details-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.faculty-details-title {
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

.faculty-details-info {
  display: flex;
  flex-direction: column;
}

.faculty-details-info-item {
  margin-bottom: 10px;
  font-size: 16px;
}

.faculty-details-label {
  font-weight: bold;
  margin-right: 8px;
  color: #333;
}



`;

function Fac() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [results, setResults] = useState({
    OS: { mark: '', grade: '' },
    CN: { mark: '', grade: '' },
    UID: { mark: '', grade: '' },
    SE: { mark: '', grade: '' },
    OE: { mark: '', grade: '' },
    gpa: '',
    cgpa: '',
  });
  const [facultyDetails, setFacultyDetails] = useState({
    fid: '',
    fname: '',
    desig: '',
    spec: '',
    exp: '',
    femail: '',
    fmobile: '',
  }); // Changed from {} to null

  

  useEffect(() => {
    // Fetch the list of students from the server
    const fetchData = async () => {
      try {
        const response = await axios.get('https://student-server-tamd.onrender.com/fetchStudents');
        if (response.data.success) {
          setStudents(response.data.data);
        } else {
          console.error('Error fetching student details:', response.data.message);
          alert('Error fetching student details. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching student details:', error);
        alert('Error fetching student details. Please try again.');
      }
    };

    fetchData();
  }, []);

  const handleSendResults = async () => {
    if (selectedStudent) {
      try {
        // Prepare the results object to match the schema
        const formattedResults = {
          
            mark1: results.OS.mark,
            grade1: results.OS.grade,
         
            mark2: results.CN.mark,
            grade2: results.CN.grade,
        
            mark3: results.UID.mark,
            grade3: results.UID.grade,
         
         
            mark4: results.SE.mark,
            grade4: results.SE.grade,
         
          
            mark5: results.OE.mark,
            grade5: results.OE.grade,
         
          // ... (repeat for other subjects)
          gpa: results.gpa,
          cgpa: results.cgpa,
        };
        
  
        // Send results to the server
        const response = await axios.post('/stud/sendResults', {
          studentId: selectedStudent._id,
          results: formattedResults,
        });
  
        if (response.data.success) {
          alert('Results sent successfully!');
          // Optionally, update UI to indicate that results were sent (e.g., show a tick mark)
        } else {
          console.error('Error sending results:', response.data.message);
          alert('Error sending results. Please try again.');
        }
      } catch (error) {
        console.error('Error sending results:', error);
        alert('Error sending results. Please try again.');
      }
    } else {
      alert('Please select a student before sending results.');
    }
  };
  

  const handleEditResults = (student) => {
    // Set the selected student for editing results
    setSelectedStudent(student);
    // You can also pre-fill the results form if needed
    setResults({
      OS: { mark: '', grade: '' },
      CN: { mark: '', grade: '' },
      UID: { mark: '', grade: '' },
      SE: { mark: '', grade: '' },
      OE: { mark: '', grade: '' },
      gpa: '',
      cgpa: '',
    });
  };

  const handleSubjectChange = (subject, field, value) => {
    setResults((prevResults) => ({
      ...prevResults,
      [subject]: {
        ...prevResults[subject],
        [field]: value,
      },
    }));
  };
  const location = useLocation();  
  const userId = new URLSearchParams(location.search).get('userId');

// Inside useEffect in Fac.js
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://student-server-tamd.onrender.com/fac?userId=${userId}`);
      if (response.data.success) {
        setFacultyDetails(response.data.data);
      } else {
        console.error('Error fetching faculty details:', response.data.message);
        alert('Error fetching faculty details. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching faculty details:', error);
      alert('Error fetching faculty details. Please try again.');
    }
  };

  fetchData();
}, [userId]);


  return (
    
    <Container>
   
 
      <FacLogout /> 
      {facultyDetails !== null && (
  <div className="faculty-details-container">
    <h2 className="faculty-details-title">
    <i className="fas fa-chalkboard-teacher"></i> Faculty Logged In</h2>
    <div className="faculty-details-info">
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">ID:</span> {facultyDetails.fid}
      </p>
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">Name:</span> {facultyDetails.fname}
      </p>
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">Designation:</span> {facultyDetails.desig}
      </p>
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">Specialization:</span> {facultyDetails.spec}
      </p>
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">Experience:</span> {facultyDetails.exp}
      </p>
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">Email:</span> {facultyDetails.femail}
      </p>
      <p className="faculty-details-info-item">
        <span className="faculty-details-label">Mobile:</span> {facultyDetails.fmobile}
      </p>
      
    </div>
    <UploadPage />
    <br/>
    <ViewPage />
    <br/>
    <DownloadPage />
  </div>
)}
    <div className="fac-container">
      <h1>Student Results<i className="fas fa-check-circle"></i></h1>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
              <td>
                <button className="edit-results-button"  onClick={() => handleSendResults(student)}>Send Results</button>
               
                <button className="send-results-button" onClick={() => handleEditResults(student)}>Edit Results</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
  <div className="edit-results-container">
    <h2>Edit Results for&nbsp;&nbsp;&nbsp;<i className="fas fa-user-graduate"></i>{selectedStudent.name}</h2>
    {/* Form to edit results */}
    <form>
      {/* Repeat for each subject */}
      {Object.entries(results).map(([subject, { mark, grade }]) => (
        subject !== 'gpa' && subject !== 'cgpa' && (
          <div key={subject}>
            <label>
              {subject}:
              <input
                type="text"
                placeholder={`Enter marks for ${subject}`}
                value={mark}
                onChange={(e) => handleSubjectChange(subject, 'mark', e.target.value)}
              />
              <input
                type="text"
                placeholder={`Enter grade for ${subject}`}
                value={grade}
                onChange={(e) => handleSubjectChange(subject, 'grade', e.target.value)}
              />
            </label>
          </div>
        )
      ))}
      <div>
        <label>
          GPA:
          <input
            type="text"
            placeholder="Enter GPA"
            value={results.gpa}
            onChange={(e) => setResults({ ...results, gpa: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          CGPA:
          <input
            type="text"
            placeholder="Enter CGPA"
            value={results.cgpa}
            onChange={(e) => setResults({ ...results, cgpa: e.target.value })}
          />
        </label>
      </div>

      <button type="button" onClick={handleSendResults}>
        Send Results
      </button>
    </form>
  </div>
)}

      </div>
     
      </Container>
    
    );
}

export default Fac;