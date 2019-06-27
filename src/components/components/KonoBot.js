import React, { Component } from "react";
import styled from "styled-components";
import MsgWrapper from "./MsgWrapper";
import OptionsWrapper from "./OptionsWrapper";
import CommonBtn from "./CommonBtn";
import BotHeader from "./BotHeader";

const Bot = styled.div`
  height: 100vh;
  background-color: #ebebeb;
  position: fixed;
  right: 0;
  width: 20%;
  overflow: scroll;
  padding-bottom: 200px;
  padding-top: 100px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

class KonoBot extends Component {
  render() {
    return (
      <Bot ref={this.props.botRef}>
        {/* <h1>Bot</h1> */}
        <BotHeader />
        {this.props.conversation.map((message, index) => {
          switch (message.type) {
            case "text":
              return (
                <MsgWrapper
                  key={index}
                  speaker={message.speaker}
                  message={message.text}
                />
              );
            case "options":
              return (
                <OptionsWrapper
                  key={index}
                  options={message.options}
                  onOptionSelect={this.props.handleOptionSelect}
                />
              );
            default:
              return (
                <MsgWrapper speaker={message.speaker} message="wrong format" />
              );
          }
        })}
        <CommonBtn
          newUserMsg={this.props.newUserMsg}
          popAllKeywords={this.props.popAllKeywords}
          setLoadingRecommend={this.props.setLoadingRecommend}
        />
      </Bot>
    );
  }
}

export default KonoBot;
