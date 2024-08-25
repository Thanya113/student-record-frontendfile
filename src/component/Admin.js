import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
//import { GoogleLogin } from 'react-google-login';
//import { useEffect } from 'react';
//import {gapi} from 'gapi-script';
//const clientId = "413667319877-37kad773q1377kmoll20rabn9k83hr4a.apps.googleusercontent.com"
 
const colorAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


const CenteredContainer = styled.div`
display: flex;
height: 90vh;
`;

const ImageContainer = styled.div`
flex: 1;
background: url('https://epe.brightspotcdn.com/dims4/default/27b1e43/2147483647/strip/true/crop/2838x1926+81+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fa2%2F59%2F1338688947809cff88b4c7ce7c7a%2Fai-laptop-102023-1473211827.jpg') center/cover no-repeat; /* Replace with your image URL */
display: flex;
align-items: center;
justify-content: center;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #00427F, #00284F, #00427F, #00284F);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
`;


const FormWrapper = styled.div`
max-width: 400px;
width: 100%;
padding: 20px;
background-color:  #f6e9d7;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
text-align: center;
color: #333;
`;

const Input = styled.input`
width: 90%;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ddd;
border-radius: 3px;
box-sizing: border-box;
`;

const Button = styled.button`
width: 100%;
padding: 12px;
background-color: #00427F; /* Pinkish tone */
color: #fff;
border: none;
border-radius: 3px;
cursor: pointer;
`;

const Icon = styled.i`
  margin-right: 8px;
`;


const ErrorMessage = styled.div`
  color: #ff0000; /* Bright red color for better visibility */
  background-color: #ffe6e6; /* Light red background */
  padding: 10px; /* Add padding for spacing */
  border-radius: 5px; /* Rounded corners */
  text-align: center;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: add a slight shadow for depth */
`;


const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      navigate('/adm');
    } else {
      setError('Enter valid username and password');
    }
  };

  // const handleGoogleLogin = (response) => {
  //   // Handle Google login success or failure here
   
  //     console.log('Google login success:', response);
  //     // Only navigate to '/adm' on successful Google login
  //     navigate('/adm');
    
  // };
  // useEffect(() => {
  //   const handleLoad = () => {
  //     // Handle library load
  //   };
  
  //   const handleError = (error) => {
  //     console.error('Google API library load error:', error);
  //   };
  
  //   gapi.load('client:auth2', { callback: handleLoad, onError: handleError });
  // }, []);
  
  
  

  return (
    <CenteredContainer> <ImageContainer>
    {/* Image goes here */}
  </ImageContainer>
      <FormContainer>
      <FormWrapper>
        <Title>Admin Login</Title>
        <div>
          <Icon className="fas fa-user" />
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <Icon className="fas fa-lock" />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      
        <Button onClick={handleLogin}>
          <Icon className="fas fa-sign-in-alt" />
          Login
        </Button>
        <br />
        <br/>
        {/* <center>
        <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLogin}
              cookiePolicy={'single_host_origin'}
              redirectUri="http://localhost:3000"  
          
            /></center> */}
      
        </div>    
        </FormWrapper>
      
      </FormContainer>
    </CenteredContainer>
  );
};

export default Admin;
