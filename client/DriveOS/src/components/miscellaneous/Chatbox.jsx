import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "Xh4QNn0Vy65TcRqMTL0eN",
      domain: "www.chatbase.co"
    };

    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chatbot;