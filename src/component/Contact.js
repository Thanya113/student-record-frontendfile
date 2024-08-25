// Import necessary dependencies
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

// Define the Contact component
const Contact = () => {
  // Create a ref for the form
  const form = useRef();

  // Function to send emails
  const sendEmail = async (e) => {
    e.preventDefault();

    // Fetch all student emails from the database
    const response = await fetch("https://student-server-tamd.onrender.com/fetchStudents");
    const students = await response.json();
    const studentEmails = students.data.map((student) => student.email);

    // Create a template parameters object
    const templateParams = {
      to_email: studentEmails.join(","),
      message: form.current.message.value // Adjust this based on your form structure
    };

    // Send email to all students using the send method
    emailjs
      .send(
        "service_0woy14d",
        "template_rfl0hie",
        templateParams,
        "jkp4YY_kbxc3Hff5j"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Return the JSX for the Contact component
  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        {/* Remove user_name and user_email inputs */}
       <bold><label>Message To Students  📧</label></bold> 
        <textarea name="message" />
        
       
        <input type="submit" value="Send Email" />
 



      </form>
    </StyledContactForm>
  );
};

// Export the Contact component
export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  margin-left: 20px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
