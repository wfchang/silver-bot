import React, { Component } from "react";
import styled from "styled-components";

const Msg = styled.div`
  margin: 25px 10px;
  text-align: ${props => (props.user ? "right" : "left")};
  word-wrap: break-word;
`;

const BotMsg = styled.span`
  padding: 10px;
  background-color: #8fc31f;
  border-radius: 10px;
  display: inline-block;
  max-width: 60%;
`;

const UserMsg = styled.span`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  display: inline-block;
  max-width: 60%;
  margin-left: 40%;
`;

class MsgWrapper extends Component {
  render() {
    return (
      <Msg user={this.props.speaker === "user" ? "user" : ""}>
        {this.props.speaker === "user" ? (
          <UserMsg>{this.props.message}</UserMsg>
        ) : (
          <BotMsg>{this.props.message}</BotMsg>
        )}
      </Msg>
    );
  }
}

export default MsgWrapper;
