import React from "react";

const Background = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <div id="background-exemple">
        <p>background em uma tag:</p>
        <br />
        <div id="background-exemple__image"></div>
      </div>
    </div>
  );
};

export default Background;
