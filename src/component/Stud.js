import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import styled from 'styled-components';
import LogoutButton from './LogoutButton'; 
import DownloadPage from './DownloadPage';
import ViewPage from './ViewPage';
//import Stdc from '../pages/Stdc';

const Container = styled.div`
  .cssst {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #ecf0f1; /* Soft blue background */
    color: #333;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation: gradientAnimation 5s infinite alternate;
    font-family: 'Roboto', sans-serif; /* Change font here */
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  h1, h2 {
    color: #2c3e50; /* Dark blueish text */
    font-family: 'Oswald', sans-serif; /* Change font here */
    font-weight: bold;
  }

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid #ddd;
    color: #333;
  }

  th, td {
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #bdc3c7; /* Light grey background for table headers */
  }

  tbody tr:nth-child(even) {
    background-color: #ecf0f1; /* Alternate row background color */
  }

  h2 {
    margin-top: 30px;
  }

  div {
    margin-top: 20px;
  }

  /* Star Rating Styles */
  h2 {
    display: inline-block;
    margin-right: 10px;
  }

  .golden-stars {
    color: #f39c12; /* Golden star color */
  }

  button {
    background-color: #3498db; /* Soft blue for buttons */
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Raleway', sans-serif;
  }

  button:hover {
    background-color: #2980b9; /* Slightly darker blue on hover */
  }
`;

function Stud() {
const subjects = ['Operating System', 'Computer Networks', 'User Interface Design', 'Software Engineering', 'Numerical Computing'];
  const [studentData, setStudentData] = useState({
    name: '',
    roll: '',
    dept: '',
    sec: '',
    email: '',
    mobile: '',
    results: {
      mark1: '',
      grade1: '',
      mark2: '',
      grade2: '',
      mark3: '',
      grade3: '',
      mark4: '',
      grade4: '',
      mark5: '',
      grade5: '',
      gpa: '',
      cgpa: '',
    },
  });

  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/stud?userId=${userId}`);
        console.log('Response:', response);
        if (response.data.success) {
          setStudentData(response.data.data);
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
  }, [userId]);

  const downloadAsPDF = () => {
    const pdf = new jsPDF();
    pdf.text(20, 20, 'Student Results');
    pdf.text(20, 30, `Name: ${studentData.name}`);
    pdf.text(20, 40, `Roll No: ${studentData.roll}`);

    // Add more lines to include your result data
    pdf.text(20, 50, 'Results:');
    pdf.text(30, 60, `Subject1: Mark - ${studentData.results.mark1}, Grade - ${studentData.results.grade1}`);
    pdf.text(30, 70, `Subject2: Mark - ${studentData.results.mark2}, Grade - ${studentData.results.grade2}`);
    pdf.text(30, 80, `Subject3: Mark - ${studentData.results.mark3}, Grade - ${studentData.results.grade3}`);
    pdf.text(30, 90, `Subject4: Mark - ${studentData.results.mark4}, Grade - ${studentData.results.grade4}`);
    pdf.text(30, 100, `Subject5: Mark - ${studentData.results.mark5}, Grade - ${studentData.results.grade5}`);
    
    pdf.text(20, 110, `GPA: ${studentData.results.gpa}`);
    pdf.text(20, 120, `CGPA: ${studentData.results.cgpa}`);

    // Save the PDF
    pdf.save('student_results.pdf');
  };

  // Function to calculate star rating based on CGPA
  const calculateStarRating = (cgpa) => {
    const stars = {
      '★★★★★': 9,
      '★★★★☆': 8,
      '★★★☆☆': 7,
      '★★☆☆☆': 6,
      '★☆☆☆☆': 0,
    };
  
    const rating = Object.keys(stars).find((star) => cgpa >= stars[star]);
  
    return <span className="golden-stars">{rating}</span>;
  };
  



return (
  <Container>
    <LogoutButton /> 
    <div className="cssst">
    
      <h1>Personal Information</h1>
      {studentData !== null && (
        <>
<button onClick={downloadAsPDF}>Download Your Result</button>

          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{studentData.name}</td>
              </tr>
              <tr>
                <td>Roll No:</td>
                <td>{studentData.roll}</td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>{studentData.dept}</td>
              </tr>
              <tr>
                <td>Section:</td>
                <td>{studentData.sec}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{studentData.email}</td>
              </tr>
              <tr>
                <td>Mobile:</td>
                <td>{studentData.mobile}</td>
              </tr>
            </tbody>
          </table>

          <h1>Your Results<span role="img" aria-label="result">
      ✅
    </span></h1>
          <table>
            <thead>
              <tr>
                <th>Subjects</th>
                <th>Marks</th>
                <th>Grades</th>
              </tr>
            </thead>
            <tbody>
            {subjects.map(subject => (
    <tr key={subject}>
      <td>{subject}</td>
      <td>{studentData.results[`mark${subjects.indexOf(subject) + 1}`]}</td>
      <td>{studentData.results[`grade${subjects.indexOf(subject) + 1}`]}</td>
    </tr>
  ))}
</tbody>
            


          </table>

          <div>
            <h2>GPA: {studentData.results.gpa}</h2>
            &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;   
            &nbsp; &nbsp; &nbsp; 
            &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp;  
            &nbsp;  &nbsp;   
            &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; 
            &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;   
            &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;   
            &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; 
            <h2>CGPA: {studentData.results.cgpa}</h2>
            <br />
            <h2>Performance: </h2><h2 className="golden-stars">{calculateStarRating(studentData.results.cgpa)}</h2>
          </div>
        </>
      )}
      <ViewPage />
       <DownloadPage />
    </div>
  
    </Container>
  
  );

}

export default Stud;