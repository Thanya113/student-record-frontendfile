import React, { useState, useEffect } from 'react';
import Stchat from './Stchat';
import './Stdc.css';

const Stdc = () => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || []);
  const [newMessageNotificationShown, setNewMessageNotificationShown] = useState(false);

  const sendMessage = (message, sender) => {
    const newMessage = { text: message, sender };
    setMessages([...messages, newMessage]);
    updateLocalStorage([...messages, newMessage]);

    if (!newMessageNotificationShown && sender === 'admin') {
      setNewMessageNotificationShown(true);
    }
  };

  const clearChat = () => {
    setMessages([]);
    updateLocalStorage([]);
  };

  const updateLocalStorage = (updatedMessages) => {
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
  };

  useEffect(() => {
    const hasAdminReply = messages.some((message) => message.sender === 'admin');

    if (hasAdminReply && !newMessageNotificationShown) {
      setNewMessageNotificationShown(true);
    }
  }, [messages, newMessageNotificationShown]);

  return (
    <div className="Stdc">
      <h3>Chat your Issues with Admin</h3>
      <Stchat messages={messages} sendMessage={sendMessage} clearChat={clearChat} />
    </div>
  );
};

export default Stdc;
