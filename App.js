import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const faqs = {
    "What is your name?": "I am the FAQ Chatbot.",
    "How are you?": "I am doing great! How can I help you today?",
    "What can you do?": "I can answer common questions you type in."
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    const botReply = faqs[input] || "Sorry, I don't know the answer to that.";
    const botMessage = { text: botReply, sender: "bot" };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>FAQ Chatbot</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '300px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '80%', padding: '10px', marginTop: '10px' }}
        placeholder="Ask a question..."
      />
      <button onClick={handleSend} style={{ padding: '10px', marginLeft: '5px' }}>Send</button>
    </div>
  );
}

export default App;
