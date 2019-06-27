import React, { Component } from "react";
import styled from "styled-components";

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

class OptionBtn extends Component {
  render() {
    return (
      <OptBtn onClick={this.props.onOptionSelect}>{this.props.option}</OptBtn>
    );
  }
}

export default OptionBtn;
