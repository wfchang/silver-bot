import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.span`
  padding: 5px 8px 5px 15px;
  margin: 5px 10px;
  background-color: #8fc31f;
  color: #ffffff;
  border-radius: 5px;
  font-size: 16px;
`;

const Cross = styled.div`
  display: inline;
  width: 3px;
  height: 3px;
  padding: 2px 5px;
  margin-left: 10px;
  background: #ffffff;
  color: #8fc31f;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background: #f1f1f1;
  }
`;

class KeywordBtn extends Component {
  constructor(props) {
    super(props);

    this.dropWord = this.dropWord.bind(this);
  }

  dropWord() {
    this.props.dropKeyword(this.props.keyword);
  }

  render() {
    return (
      <Btn>
        {this.props.keyword}
        <Cross onClick={this.dropWord}>X</Cross>{" "}
      </Btn>
    );
  }
}

export default KeywordBtn;
