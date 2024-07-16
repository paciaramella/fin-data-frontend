import React from "react";

function ChatbotSidebar({ definition }) {
  return (
    <div style={{ width: "300px", border: "1px solid #ccc", padding: "10px" }}>
      <h3>Financial Metric Definition</h3>
      <p>{definition}</p>
    </div>
  );
}

export default ChatbotSidebar;
