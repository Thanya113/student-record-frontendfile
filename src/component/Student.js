import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const colorAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  display: flex;
  height: 90vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  background: url('https://media.istockphoto.com/id/1361844238/photo/high-school-professor-assisting-her-students-in-e-learning-on-laptop-in-the-classroom.jpg?s=612x612&w=0&k=20&c=RUI6d64h2mszvH2CicmeSCp_sZowN1p81dtuctGIaRM=') center/cover;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #6A5ACD, #87CEEB, #6A5ACD);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
  font-family: 'Poppins', sans-serif;
`;

const InnerFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 72%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db; /* Blue button color */
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Student = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roll: '',
    name: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/login', formData);

      if (response.data.success) {
        const userId = response.data.userId;
        const studDetailsResponse = await axios.get(`/stud?userId=${userId}`);

        if (studDetailsResponse.data.success) {
          navigate(`/stud?userId=${userId}`);
        } else {
          setError('Student not found');
        }
      } else {
        setError('Wrong login credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <InnerFormContainer>
          <Title>Student Login</Title>
          <form onSubmit={handleLogin}>
            <InputContainer>
              <Icon className="fas fa-id-card" />
              Roll No:
              <Input
                type="text"
                id="roll"
                name="roll"
                value={formData.roll}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Icon className="fas fa-user" />
              Name:
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <Button type="submit">
              <Icon className="fas fa-sign-in-alt" />
              Login
            </Button>
          </form>
        </InnerFormContainer>
      </FormContainer>
    </Container>
  );
};

export default Student;
