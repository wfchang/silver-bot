import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const Wall = styled.div`
  padding-left: 100px;
`;

class KonoWall extends Component {
  render() {
    return (
      <Wall>
        <Row>
          {this.props.articles.map((article, index) => {
            return (
              <Col key={index} md={3}>
                <ArticleCard key={article.id} article={article} />
              </Col>
            );
          })}
        </Row>
      </Wall>
    );
  }
}

export default KonoWall;
