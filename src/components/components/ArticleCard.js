import React, { Component } from "react";
import styled from "styled-components";

const ArticleLink = styled.a`
  color: #000000;
`;

const Card = styled.div`
  width: 100%;
  margin: 30px 10px;
  display: inline-block;
  position: relative;
  min-height: 400px;
`;

const ImgBox = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
`;

const ImgBoxInner = styled.div`
  width: 100%;
  height: 0;
  padding-top: 75%;
  position: relative;
`;

const ArticleImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.background});
`;

const MagazineWrapper = styled.div`
  display: block;
  font-size: 16px;
  color: #8fc31f;
  min-height: 3em;
  line-height: 3em;
`;

const TitleWrapper = styled.div`
  display: block;
  font-size: 20px;
  color: #000000;
  min-height: 3em;
`;

const DescWrapper = styled.div`
  display: block;
  font-size: 16px;
  color: #595757;
  min-height: 3em;
`;

const cropText = text => {
  if (!text) {
    return "";
  }
  const max_len = 30;
  if (text.length >= max_len) {
    return text.substring(0, max_len) + "...";
  }
};

class ArticleCard extends Component {
  render() {
    return (
      <ArticleLink href={this.props.article.article_url} target="_blank">
        <Card>
          <ImgBox>
            <ImgBoxInner>
              <ArticleImg background={this.props.article.main_image_url.url} />
            </ImgBoxInner>
          </ImgBox>
          <MagazineWrapper>{this.props.article.magazine_name}</MagazineWrapper>
          <TitleWrapper>{this.props.article.title}</TitleWrapper>
          <DescWrapper>{cropText(this.props.article.intro)}</DescWrapper>
        </Card>
      </ArticleLink>
    );
  }
}

export default ArticleCard;
