import React, { Component } from "react";
import styled from "styled-components";
import avatar from "./../../bot.png";

const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100px;
  background-color: #8fc31f;
  color: #ffffff;
  text-align: center;
  line-height: 100px;
  vertical-align: center;
  font-size: 24px;
`;

// const ImgBox = styled.div`
//   width: 36px;
//   height: 36px;
//   background: #ffffff;
//   background-image: url(${props => props.background});
//   background-size: cover;
//   background-position: center;
//   position: absolute;
//   top: 50%;
//   left: 90px;
//   transform: translate(0, -50%);
//   border-radius: 50%;
// `;

const Img = styled.img`
  width: 60%;
`;

class BotHeader extends Component {
  render() {
    return (
      <Header>
        <Img src={avatar} />
        {/* <ImgBox background={avatar} /> */}
        {/* Silver Bot */}
      </Header>
    );
  }
}

export default BotHeader;
