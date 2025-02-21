import React from "react";

const Hierarquia = () => {
  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}>
      <div>
        <p>Hierarquia estilos CSS</p>
        <div
          style={{
            backgroundColor: "#384170",
            color: "white",
            padding: "10px",
            margin: "10px",
            width: "fit-content",
          }}>
          css Inline
          <div
            style={{
              backgroundColor: "#4370ab",
              color: "white",
              padding: "10px",
              margin: "10px",
            }}>
            {" "}
            css Integrated
            <div
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "10px",
                margin: "10px",
              }}>
              css Arquivo
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px", textAlign: "left", width: "350px" }}>
        <p style={{ textAlign: "center" }}>Hierarquia Box-model</p>
        <div
          style={{
            backgroundColor: "#b08454",
            padding: "10px",
            margin: "10px",
            border: "1.5px dashed black",
          }}>
          margin
          <div
            style={{
              backgroundColor: "#e3c281",
              padding: "10px",
              margin: "10px",
              border: "1.5px dashed black",
            }}>
            border
            <div
              style={{
                backgroundColor: "#b8c480",
                padding: "10px",
                margin: "10px",
                border: "1.5px dashed black",
              }}>
              padding
              <div
                style={{
                  backgroundColor: "#88b2bd",
                  padding: "10px",
                  margin: "10px",
                  border: "1.5px dashed black",
                }}>
                Content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hierarquia;
