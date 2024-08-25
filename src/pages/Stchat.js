import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  padding: 0px;
  display: flex;
  justify-content: flex-end;
`;

const StchatContainer = styled.div`
  // Add your container styles here
`;

const ChatHeader = styled.div`
  // Add your header styles here
`;

const Menu = styled.div`
  // Add your menu styles here
`;

const MenuList = styled.ul`
  // Add your menu list styles here
`;

const Stchat = ({ messages, sendMessage, clearChat }) => {
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
    sendMessage(newMessage, 'student');
    setNewMessage('');
  };

  useEffect(() => {
    // Removed alert notification
  }, [messages]);

  return (
    <StchatContainer className="chat-container">
      <ChatHeader className="chat-header">
        Student&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <span className="more-icon" onClick={handleMenuClick}><MoreVertIcon /></span>
        {anchorEl && (
          <Menu className="menu">
            <MenuList className="menu-list">
              <ClearChatButton onClick={handleClearChat}>Clear Chat</ClearChatButton>
            </MenuList>
          </Menu>
        )}
      </ChatHeader>
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'admin' ? 'admin-message' : 'student-message'}>
            <span className="message-sender">{message.sender === 'admin' ? 'Admin' : 'You'}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button className="send-button" onClick={handleSend}><SendIcon /></button>
      </div>
    </StchatContainer>
  );
};

export default Stchat;
