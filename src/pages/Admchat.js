import React, { useState, useEffect } from 'react';
import Adchat from './Adchat';


const Admchat = () => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || []);
  const [replyNotificationShown, setReplyNotificationShown] = useState(false);

  const sendMessage = (message, sender) => {
    const newMessage = { text: message, sender };
    setMessages([...messages, newMessage]);
    updateLocalStorage([...messages, newMessage]);

    if (!replyNotificationShown && sender === 'student') {
      setReplyNotificationShown(true);
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
    const hasNewMessages = messages.some((message) => message.sender === 'student');

    if (hasNewMessages && !replyNotificationShown) {
      setReplyNotificationShown(true);
    }
  }, [messages, replyNotificationShown]);

  return (
    <div className="Admchat">
      <Adchat messages={messages} sendMessage={sendMessage} clearChat={clearChat} />
    </div>
  );
};

export default Admchat;
