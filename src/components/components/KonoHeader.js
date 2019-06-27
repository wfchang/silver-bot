import React, { Component } from "react";
import styled from "styled-components";
import logo from "./../../logo.png";

const Header = styled.div`
  padding: 20px 0 20px 100px;
  text-align: center;
  font-size: 32px;
  color: #8fc31f;
`;

const Icon = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  margin-bottom: 3px;
`;

class KonoHeader extends Component {
  render() {
    return (
      <Header>
        <h1>
          <Icon src={logo} alt="logo" />
          Kono Wall
        </h1>
      </Header>
    );
  }
}

export default KonoHeader;
