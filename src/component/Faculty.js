import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const colorAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  display: flex;
  height: 90vh;
  font-family: 'Poppins', sans-serif;
`;

const ImageContainer = styled.div`
  flex: 1;
  background: url('https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.webp?b=1&s=170667a&w=0&k=20&c=nf2JJMKOr1b3N7Ht2tO2hrdGdldu40K2onNY3hx3r5o=') center/cover;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #D8BFD8, #9370DB, #D8BFD8, #9370DB);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
`;

const LoginForm = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fce8ec; /* Light pink pastel background color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #9370DB;  /* Pink button color */
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

const Faculty = () => {
  const [email, setEmail] = useState('');
  const [fid, setFid] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');

    try {
      const response = await axios.post('https://student-server-tamd.onrender.com/faculty-login', {
        email: email,
        fid: fid,
      });

      if (response.data.success) {
        const facultyId = response.data.facultyId;
        navigate(`/fac?userId=${facultyId}`);
      } else {
        setError('Wrong credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during faculty login:', error);
      setError('Error during faculty login. Please try again.');
    }
  };

  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <LoginForm>
          <Title>Faculty Login</Title>
          <div>
            <Icon className="fas fa-user" />
            <Input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Icon className="fas fa-lock" />
            <Input
              type="password"
              placeholder="Password"
              value={fid}
              onChange={(e) => setFid(e.target.value)}
            />
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button onClick={handleLogin}>
            <Icon className="fas fa-sign-in-alt" />
            Login
          </Button>
        </LoginForm>
      </FormContainer>
    </Container>
  );
};

export default Faculty;
