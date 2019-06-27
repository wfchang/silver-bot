import React, { Component } from "react";
import styled from "styled-components";
import refresh from "./../../refresh-arrow.svg";
import searcher from "./../../searcher.svg";
import service from "./../../service.svg";

const BtnGroup = styled.div`
  position: fixed;
  width: 20%;
  bottom: 100px;
  height: 100px;
  background: #606060;
`;

const Btn = styled.div`
  width: 33%;
  height: 100%;
  color: #ffffff;
  display: inline-block;
  border: #ffffff 1px solid;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  :hover {
    background: #aaaaaa;
  }
`;

const Icon = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
`;

class CommonBtn extends Component {
  constructor(props) {
    super(props);

    this.sendRecommendMsg = this.sendRecommendMsg.bind(this);
    this.sendContactMsg = this.sendContactMsg.bind(this);
    this.sendResetMsg = this.sendResetMsg.bind(this);
  }

  sendRecommendMsg() {
    const msg = {
      speaker: "user",
      type: "text",
      text: "隨意幫我推"
    };
    this.props.popAllKeywords();
    this.props.newUserMsg(msg);
    this.props.setLoadingRecommend();
  }

  sendResetMsg() {
    const msg = {
      speaker: "user",
      type: "text",
      text: "我想重新搜"
    };

    this.props.popAllKeywords();
    this.props.newUserMsg(msg);
  }

  sendContactMsg() {
    const msg = {
      speaker: "user",
      type: "text",
      text: "與客服聯繫"
    };
    this.props.newUserMsg(msg);
  }

  render() {
    return (
      <BtnGroup>
        <Btn onClick={this.sendRecommendMsg}>
          <Icon src={searcher} alt="searcher" />
          隨意幫我推
        </Btn>
        <Btn onClick={this.sendResetMsg}>
          <Icon src={refresh} alt="refresh" />
          我想重新搜
        </Btn>
        <Btn onClick={this.sendContactMsg}>
          <Icon src={service} alt="service" />
          與客服聯絡
        </Btn>
      </BtnGroup>
    );
  }
}

export default CommonBtn;
