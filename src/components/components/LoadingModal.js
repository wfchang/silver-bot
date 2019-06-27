import React, { Component } from "react";
import styled from "styled-components";
import icon from "./../../loading.gif";

const Modal = styled.div`
  background: #fffffff0;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  display: ${props => (props.loading ? "block" : "none")};
`;

const IconWrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Hint = styled.div`
  font-size: 24px;
  margin: 10px 0;
  color: #454c48;
  text-align: center;
`;

class LoadingModal extends Component {
  constructor(props) {
    super(props);

    this.hintMessage = this.hintMessage.bind(this);
  }

  hintMessage() {
    console.log(this.props.loadingType);
    if (this.props.loadingType === "init") {
      return `正在為你準備專屬推薦的 Kono Wall`;
    } else if (this.props.loadingType === "search") {
      return `正在為你搜尋「${this.props.keyword}」相關的文章，請稍等`;
    } else {
      return `我想為你推薦「${this.props.keyword}」相關的文章，請稍等`;
    }
  }

  render() {
    return (
      <Modal loading={this.props.loading}>
        <IconWrapper>
          <img src={icon} alt="loading" width="100%" />
          <Hint>{this.hintMessage()}</Hint>
        </IconWrapper>
      </Modal>
    );
  }
}

export default LoadingModal;
