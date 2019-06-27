import React, { Component } from "react";
import StackGrid from "react-stack-grid";

const colors = ["#8bc0e6", "#e3cd1d", "#b6b9bd"];
const heights = ["350px", "250px", "300px", "260px", "280px"];

class PinBoard extends Component {
  render() {
    return (
      <div>
        <h1>Pin Board</h1>
        <StackGrid columnWidth={250} gutterHeight={5} gutterWidth={5}>
          {[...Array(50)].map((e, i) => {
            return (
              <div
                className="pin"
                key={i}
                style={{
                  backgroundColor: colors[i % 3],
                  height: heights[i % 5]
                }}
              />
            );
          })}
          {/* <div
            className="pin"
            key="key1"
            style={{ backgroundColor: "#8bc0e6" }}
          >
            <span>1</span>
          </div>
          <div className="pin" key="key2">
            <span>2</span>
          </div>
          <div className="pin" key="key3">
            <span>3</span>
          </div> */}
        </StackGrid>
      </div>
    );
  }
}

export default PinBoard;
