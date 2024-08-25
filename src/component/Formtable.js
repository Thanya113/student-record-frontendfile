import React from 'react'

import {MdClose} from "react-icons/md"

import styled from 'styled-components';


const Container = styled.div`
*{
  box-sizing: border-box;
}
body{
  background-color: #f5f6ff;
}
.container{
  padding: 10px;
  
  max-width: fit-content;
  margin: 50px auto;
}
.btn{
  border:none;
  padding: 7px 15px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-add{
  background: #194064;
  color: white;
  
}
.addContainer{
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addContainer form{
width: 420px;
background-color: white;
display: flex;
flex-direction: column;
padding: 25px 40px;
box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
border-radius: 5px;
}
.addContainer form label{
  font-size: 18px;
}
.addContainer form input{
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.addContainer form button{
  background-color: royalblue;
  color: white;
  font-weight: 500;
  margin-top: 20px;
}
.addContainer form .close-btn{
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

.tableContainer{
  margin-top: 50px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  border-radius: 5px;

}
.addContainer table{
  
}
.tableContainer table thead tr{
  background-color: #f0eaea;
  
}

.tableContainer table thead tr th,
.tableContainer table tbody tr td{
   min-width: 150px;
   text-align: center;
   padding : 7px;
}
.tableContainer table tbody tr{
  border: 1px solid #c9c5c2;
}
.tableContainer table tbody tr td{
  border-bottom: 1px solid #c9c5c2;
}
.btn-edit,
.btn-delete{
  font-size: 16px;
  padding: 5px 10px;
  margin: 0px 10px;
}
.btn-edit{
  background-color: #e2f43e;
}
.btn-delete{
  background-color: #fa1717;
  color: white;
}


`;

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <Container>
    <div className="addContainer">
    <form onSubmit={handleSubmit}>
    
      <div className="close-btn" onClick={handleclose}><MdClose/></div>
      <label htmlFor="roll" >Roll No : </label>
      <input type="text" id="roll" name="roll" onChange={handleOnChange} value={rest.roll}/>
      <label htmlFor="name">Name : </label>
      <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
      <label htmlFor="dept">Department : </label>
      <input type="text" id="dept" name="dept" onChange={handleOnChange} value={rest.dept}/>
      <label htmlFor="sec">Section : </label>
      <input type="text" id="sec" name="sec" onChange={handleOnChange} value={rest.sec}/>
      <label htmlFor="email">Email : </label>
      <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email}/>
      <label htmlFor="mobile">Mobile : </label>
      <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/>
      <button className="btn">Add Student</button>
    </form>
   </div>
   </Container>
  )
}

export default Formtable