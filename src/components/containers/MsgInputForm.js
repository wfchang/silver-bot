import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 20%;
`;

const Input = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100px;
`;

class MsgInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ msg: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.msg);
    const msg = {
      speaker: "user",
      type: "text",
      text: this.state.msg
    };
    this.props.newMsg(msg);
    this.setState({ msg: "" });
  }

  render() {
    return (
      <div id="msg-input">
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={this.state.msg}
            onChange={this.handleChange}
          />
        </Form>
      </div>
    );
  }
}

export default MsgInputForm;
