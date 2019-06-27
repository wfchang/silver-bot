import React, { Component } from "react";
import styled from "styled-components";
// import OptionBtn from "./OptionBtn";

const OptWrapper = styled.div`
  max-width: 80%;
`;

const OptBtn = styled.div`
  display: inline-block;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px #8fc31f solid;
  cursor: pointer;
  :hover {
    background-color: #8fc31f;
  }
`;

class OptionsWrapper extends Component {
  render() {
    return (
      <OptWrapper>
        {this.props.options.map((opt, index) => {
          return (
            <OptBtn key={index} onClick={this.props.onOptionSelect}>
              {opt}
            </OptBtn>
          );
        })}
      </OptWrapper>
    );
  }
}

export default OptionsWrapper;
