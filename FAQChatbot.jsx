import React, { useState } from "react";

const faqData = [
  { question: "What is an FAQ chatbot?", answer: "An FAQ chatbot answers frequently asked questions." },
  { question: "How does it learn?", answer: "It logs interactions and uses them to improve answers." },
  { question: "Which technologies are used?", answer: "React, Dialogflow, Firebase, OpenAI API." },
];

export default function FAQChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi — ask me anything about our product or browse the FAQ." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const faq = faqData.find(f =>
      f.question.toLowerCase().includes(input.toLowerCase())
    );
    const botReply = faq ? faq.answer : "Sorry, I don't have an answer for that right now.";

    setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* FAQ List */}
      <div style={{ width: "40%" }}>
        <h3>FAQ</h3>
        {faqData.map((item, idx) => (
          <div key={idx} style={{ marginBottom: "10px" }}>
            <b>{item.question}</b>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div style={{ width: "60%", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
        <div style={{ height: "200px", overflow: "auto", marginBottom: "10px" }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
              <p
                style={{
                  background: msg.sender === "user" ? "#DCF8C6" : "#EEE",
                  display: "inline-block",
                  padding: "8px",
                  borderRadius: "5px",
                  maxWidth: "70%"
                }}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask a question..."
            style={{ width: "80%", padding: "5px" }}
          />
          <button onClick={handleSend} style={{ padding: "5px 10px", marginLeft: "5px" }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}