import React, { Component } from "react";
import { Row } from "react-bootstrap";
// import axios from "axios";

import KonoWall from "../components/KonoWall";

class KonoWallContainer extends Component {
  render() {
    return (
      <div id="kono-wall">
        <KonoWall articles={this.props.articles} />
      </div>
    );
  }
}

export default KonoWallContainer;
