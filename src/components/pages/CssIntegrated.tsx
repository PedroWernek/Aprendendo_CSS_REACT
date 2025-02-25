import React from "react";

const CssIntegrated = () => {
  return (
    <div>
      <style>
        {`
        .CssIntegrated {
          background-color: fuchsia;
          padding: 10px;
          margin: 10px;
          border: 3px solid black;

          & h1 {
            color: blue;
            font-size: 80px;
          }
          & h2 {
            color: orange;
            background-color: black;
          }
        }
      `}
      </style>
      <div className="CssIntegrated">
        <h1>Teste de CSS integrado</h1>
        <h2>Segundo h2</h2>
        <p style={{ color: "cyan", backgroundColor: "purple", margin: "10px" }}>
          Se caso tiver um valor no style dessa tag, esse valor terá maior
          prioridade como nesse caso...
        </p>
      </div>
    </div>
  );
};

export default CssIntegrated;
