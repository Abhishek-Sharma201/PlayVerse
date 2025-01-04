import React from 'react';

const Chatbot = () => {
  return (
    <div style={{ position: 'relative', height: '80vh', width: '100%' }}>
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/04/00/20250104004306-U5ZN7RNR.json"
        style={{
          border: 'none',
          width: '400px',
          height: '600px',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        title="Chatbot"
        allow="microphone; camera"
      />
    </div>
  );
};

export default Chatbot;
