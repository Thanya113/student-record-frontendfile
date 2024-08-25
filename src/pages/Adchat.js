import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Admchat.css';
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const MoreVertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const ClearChatButton = styled.li`
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`;

const AdchatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  background-color: #075e54;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  // Add your menu styles here
`;

const MenuList = styled.ul`
  // Add your menu list styles here
`;

const AdchatMessages = styled.div`
  padding: 10px;
  height: 200px;
  overflow-y: scroll;
  background-color: #fff;
`;
// eslint-disable-next-line no-unused-vars
const AdminMessage = styled.div`
  background-color: #075e54;
  color: #fff;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  max-width: 80%;
  align-self: flex-end;
`;
// eslint-disable-next-line no-unused-vars
const StudentMessage = styled.div`
  background-color: #dcf8c6;
  color: #333;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  max-width: 80%;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #075e54;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #054a3d;
  }
`;

const Adchat = ({ messages, sendMessage, clearChat }) => {
  const [newMessage, setNewMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClearChat = () => {
    clearChat();
    handleMenuClose();
  };

  const handleSend = () => {
    sendMessage(newMessage, 'admin');
    setNewMessage('');
  };

  useEffect(() => {
    // Removed alert notification
  }, [messages]);

  return (
    <AdchatContainer>
      <ChatHeader>
        Admin
        <span className="more-icon" onClick={handleMenuClick}><MoreVertIcon /></span>
        {anchorEl && (
          <Menu className="menu">
            <MenuList className="menu-list">
              <ClearChatButton onClick={handleClearChat}>Clear Chat</ClearChatButton>
            </MenuList>
          </Menu>
        )}
      </ChatHeader>
      <AdchatMessages>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'admin' ? 'admin-message' : 'student-message'}>
            <span className="message-sender">{message.sender === 'admin' ? 'You' : 'Student'}:</span> {message.text}
          </div>
        ))}
      </AdchatMessages>
      <InputContainer>
        <Input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <SendButton onClick={handleSend}><SendIcon /></SendButton>
      </InputContainer>
    </AdchatContainer>
  );
};

export default Adchat;