import React, { Component } from "react";
import styled from "styled-components";
import KeywordBtn from "../components/KeywordBtn";

const Bar = styled.div`
  padding-left: 100px;
  font-size: 24px;
  display: inline-block;
`;

class KeywordsContainer extends Component {
  render() {
    return (
      <div id="keyword-bar">
        <Bar>依聊天紀錄為您推薦：</Bar>
        {this.props.keywords.map((keyword, index) => {
          return (
            <KeywordBtn
              key={index}
              keyword={keyword}
              dropKeyword={this.props.dropKeyword}
            />
          );
        })}
      </div>
    );
  }
}

export default KeywordsContainer;
