import React from "react";

const DisplayFlex = () => {
  return (
    <div className="display-flex">
      <h1>Display Flex</h1>
      <div className="flex-containers">
        <h2>Directions</h2>
        <br />
        <h3>Default</h3>
        <div className="flex-container">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>
        <h3>Column</h3>
        <div className="flex-container--direction_column">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>
        <h3>Row</h3>
        <div className="flex-container--direction_row">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>
        <h2>Flex-Wrap</h2>
        <br />
        <h3>No-Wrap {"(Default)"}</h3>
        <div
          style={{ display: "flex", flexWrap: "nowrap" }}
          className="flex-container">
          {Array.from({ length: 33 }).map((_, index) => (
            <div key={index} className="flex-item">
              {index + 1}
            </div>
          ))}
        </div>
        <h3>Wrap</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className="flex-container">
          {" "}
          {Array.from({ length: 33 }).map((_, index) => (
            <div key={index} className="flex-item">
              {index + 1}
            </div>
          ))}
        </div>
        <h2>Flex-Flow = Flex-Wrap + Flex-Direction</h2>
        <br />
        <h3>FLEX</h3>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            gap: "0px",
            padding: "0px",
          }}
          className="flex-container--direction_row">
          <div style={{ flex: "25%" }} className="flex-item">
            1
          </div>
          <div style={{ flex: "50%" }} className="flex-item">
            2
          </div>
          <div style={{ flex: "50%" }} className="flex-item">
            3
          </div>
          <div style={{ flex: "0%" }} className="flex-item">
            4
          </div>
          <div style={{ flex: "7%" }} className="flex-item">
            5
          </div>
          <div style={{ flex: "10%" }} className="flex-item">
            6
          </div>
          <div style={{ flex: "75%" }} className="flex-item">
            7
          </div>
          <div style={{ flex: "150%" }} className="flex-item">
            8
          </div>
          <div style={{ flex: "54%" }} className="flex-item">
            9
          </div>
          <div style={{ flex: "25%" }} className="flex-item">
            10
          </div>
          <div style={{ flex: "25%" }} className="flex-item">
            11
          </div>
          <div style={{ flex: "50%" }} className="flex-item">
            12
          </div>
          <div style={{ flex: "90%" }} className="flex-item">
            13
          </div>
          <div style={{ flex: "2%" }} className="flex-item">
            14
          </div>
          <div style={{ flex: "5%" }} className="flex-item">
            15
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFlex;
