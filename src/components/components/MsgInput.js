import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 20%;
  min-height: 50px;
`;

class MsgInput extends Component {
  render() {
    return <Input type="text" name="user-input" />;
  }
}

export default MsgInput;
