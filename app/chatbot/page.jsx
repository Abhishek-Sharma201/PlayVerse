'use client';
import React, { useState } from 'react';
import ChatBot from '../../components/chatbot';

const Page = () => {
  // State to track a simple example variable (e.g., chatbot status)
  const [chatActive, setChatActive] = useState(true);

  // Toggle function to update the state
  const toggleChat = () => setChatActive(!chatActive);

  return (
    <div>
      <button onClick={toggleChat}>
        {chatActive ? 'Disable Chat' : 'Enable Chat'}
      </button>
      {chatActive && <ChatBot />}
    </div>
  );
};

export default Page;
