import React from "react";

const CssInline = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "10px",
        margin: "10px",
        border: "2px solid black",
      }}>
      <h1 style={{ color: "red", fontSize: "50px" }}>Teste Inline</h1>
      <h2 style={{ color: "green", backgroundColor: "gray" }}>Segundo h2</h2>
    </div>
  );
};

export default CssInline;
