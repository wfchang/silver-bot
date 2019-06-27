import React, { Component } from "react";
import styled from "styled-components";
import KeywordBtn from "./KeywordBtn";

const Bar = styled.div`
  padding-left: 100px;
  font-size: 24px;
  display: inline-block;
`;

const BtnsWrapper = styled.div`
  display: inline-block;
`;

class KeywordsBar extends Component {
  render() {
    return (
      <div id="keyword-bar">
        <Bar>依聊天紀錄為您推薦：</Bar>
        <BtnsWrapper>
          {this.props.keywords.map((keyword, index) => {
            console.log(keyword, index);
            return <KeywordBtn key={index} keyword={keyword} />;
          })}
        </BtnsWrapper>
      </div>
    );
  }
}

export default KeywordsBar;
