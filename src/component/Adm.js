import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formtable from './Formtable.js';
import Factable from './Factable.js';
import styled from 'styled-components';
import AdmLogout from './AdmLogout';
import ViewPage from './ViewPage.js';
import DownloadPage from './DownloadPage.js';
import Contact from './Contact.js';
//import Admchat from '../pages/Admchat';

axios.defaults.baseURL = 'https://student-server-tamd.onrender.com/';

const ContactAdmcContainer = styled.div`
display: flex;
flex-direction: column;

@media only screen and (min-width: 768px) {
  flex-direction: row;
  align-items: flex-start; /* Adjust the alignment */
  justify-content: space-between;
}
  }
`;
const Container = styled.div`
@media only screen and (max-width: 768px) {
  // ... responsive styles ...
  
}

// Center the Admc component
display: flex;
flex-direction: column;
align-items: center;

  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f5f6ff;
  }
  .container {
    padding: 10px;
    max-width: fit-content;
    margin: 50px auto;
  }
  .btn {
    border: none;
    padding: 7px 15px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-add {
    background: #194064;
    color: white;
  }
  .addContainer {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addContainer form {
    width: 420px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 25px 40px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .addContainer form label {
    font-size: 18px;
  }
  .addContainer form input {
    font-size: 18px;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .addContainer form button {
    background-color: royalblue;
    color: white;
    font-weight: 500;
    margin-top: 20px;
  }
  .addContainer form .close-btn {
    margin-left: auto;
    font-size: 18px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #000;
    cursor: pointer;
  }

  .tableContainer {
    margin-top: 50px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .addContainer table {
  }
  .tableContainer table thead tr {
    background-color: #f0eaea;
  }

  .tableContainer table thead tr th,
  .tableContainer table tbody tr td {
    min-width: 150px;
    text-align: center;
    padding: 7px;
  }
  .tableContainer table tbody tr {
    border: 1px solid #c9c5c2;
  }
  .tableContainer table tbody tr td {
    border-bottom: 1px solid #c9c5c2;
  }
  .btn-edit,
  .btn-delete {
    font-size: 16px;
    padding: 5px 10px;
    margin: 0px 10px;
  }
  .btn-edit {
    background-color: #e2f43e;
  }
  .btn-delete {
    background-color: #fa1717;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    .addContainer form {
      width: 100%; // Adjust the width for smaller screens
      padding: 15px; // Adjust padding for smaller screens
    }
    .tableContainer table thead tr th,
    .tableContainer table tbody tr td {
      min-width: auto; // Remove min-width for smaller screens
      padding: 5px; // Adjust padding for smaller screens
      font-size: 14px; // Adjust font size for smaller screens
    }
    .btn-edit,
    .btn-delete {
      font-size: 14px; // Adjust font size for smaller screens
      padding: 3px 8px; // Adjust padding for smaller screens
    }
  }
  
`;
function Adm() {
  const [addStudentSection, setAddStudentSection] = useState(false);
  const [editStudentSection, setEditStudentSection] = useState(false);
  const [formData, setFormData] = useState({
    roll: '',
    name: '',
    dept: '',
    sec: '',
    email: '',
    mobile: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    roll: '',
    name: '',
    dept: '',
    sec: '',
    email: '',
    mobile: '',
    _id: '',
  });

  const [addFacultySection, setAddFacultySection] = useState(false);
  const [editFacultySection, setEditFacultySection] = useState(false);
  const [facultyFormData, setFacultyFormData] = useState({
    fid: '',
    fname: '',
    desig: '',
    spec: '',
    exp: '',
    femail: '',
    fmobile: '',
  });

  const [facultyFormDataEdit, setFacultyFormDataEdit] = useState({
    fid: '',
    fname: '',
    desig: '',
    spec: '',
    exp: '',
    femail: '',
    fmobile: '',
    _id: '',
  });

  const [dataList, setDataList] = useState([]);
  const [facultyDataList, setFacultyDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('/create', formData);
    console.log(data);
    if (data.data.success) {
      setAddStudentSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        roll: '',
        name: '',
        dept: '',
        sec: '',
        email: '',
        mobile: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/');
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete('/delete/' + id);

    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/update/', formDataEdit);

    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditStudentSection(false);
    }
  };

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditStudentSection(true);
  };

  //faculty code

  const handleOnChangeFaculty = (e) => {
    const { value, name } = e.target;

    setFacultyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitFaculty = async (e) => {
    e.preventDefault();

    const data = await axios.post('/faculty/create', facultyFormData);

    if (data.data.success) {
      setAddFacultySection(false);
      alert(data.data.message);
      getFetchDataFaculty();
      setFacultyFormData({
        fid: '',
        fname: '',
        desig: '',
        spec: '',
        exp: '',
        femail: '',
        fmobile: '',
      });
    }
  };

  const getFetchDataFaculty = async () => {
    const data = await axios.get('/faculty');
    console.log(data);

    if (data.data.success) {
      setFacultyDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchDataFaculty();
  }, []);

  const handleDeleteFaculty = async (id) => {
    const data = await axios.delete(`/faculty/delete/${id}`);

    if (data.data.success) {
      getFetchDataFaculty();
      alert(data.data.message);
    }
  };

  const handleUpdateFaculty = async (e) => {
    e.preventDefault();

    const data = await axios.put('/faculty/update', facultyFormDataEdit);

    if (data.data.success) {
      getFetchDataFaculty();
      alert(data.data.message);
      setEditFacultySection(false);
    }
  };

  const handleEditOnChangeFaculty = (e) => {
    const { value, name } = e.target;

    setFacultyFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditFaculty = (el) => {
    setFacultyFormDataEdit(el);
    setEditFacultySection(true);
  };






  return (
    <Container>
      <AdmLogout />
      <div className="container">
        <center>
          <strong>
            <h1>
              <i className="fas fa-user-graduate"></i>Student Details
            </h1>
          </strong>
        </center>
        <br />
        <button className="btn btn-add" onClick={() => setAddStudentSection(true)}>
          Add Students
        </button>
        {addStudentSection && (
          <Formtable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddStudentSection(false)}
            rest={formData}
          />
        )}
        {editStudentSection && (
          <Formtable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditStudentSection(false)}
            rest={formDataEdit}
          />
        )}
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Section</th>
                <th>Email</th>
                <th>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => {
                  console.log(el);
                  return (
                    <tr key={el._id}>
                      <td>{el.roll}</td>
                      <td>{el.name}</td>
                      <td>{el.dept}</td>
                      <td>{el.sec}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(el)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p style={{ textAlign: 'center' }}>No data available</p>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <center>
          <strong>
            <h1>
              <i className="fas fa-chalkboard-teacher"></i> Faculty Details
            </h1>
          </strong>
        </center>
        <br />
        <button
          className="btn btn-add"
          onClick={() => setAddFacultySection(true)}
        >
          Add Faculty
        </button>
        {addFacultySection && (
          <Factable
            handleSubmit={handleSubmitFaculty}
            handleOnChange={handleOnChangeFaculty}
            handleclose={() => setAddFacultySection(false)}
            rest={facultyFormData}
          />
        )}
        {editFacultySection && (
          <Factable
            handleSubmit={handleUpdateFaculty}
            handleOnChange={handleEditOnChangeFaculty}
            handleclose={() => setEditFacultySection(false)}
            rest={formDataEdit}
          />
        )}
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>FacID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {facultyDataList[0] ? (
                facultyDataList.map((el) => {
                  console.log(el);
                  return (
                    <tr key={el._id}>
                      <td>{el.fid}</td>
                      <td>{el.fname}</td>
                      <td>{el.desig}</td>
                      <td>{el.spec}</td>
                      <td>{el.exp}</td>
                      <td>{el.femail}</td>
                      <td>{el.fmobile}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEditFaculty(el)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDeleteFaculty(el._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p style={{ textAlign: 'center' }}>
                  No data available
                </p>
              )}
            </tbody>
          </table>
        </div>
        <ViewPage />
        <DownloadPage />
        <br />
        <ContactAdmcContainer>
          <Contact />
        
        </ContactAdmcContainer>
      </div>
      
    </Container>
  );
}

export default Adm;
