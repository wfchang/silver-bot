import React, { Component } from "react";
import axios from "axios";
import KonoBot from "./../components/KonoBot";
import MsgInputForm from "./MsgInputForm";

class KonoBotContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversation: [],
      bufferMsg: []
    };

    this.api_url = "http://192.168.1.108:5000";

    this.newUserMsg = this.newUserMsg.bind(this);
    this.newBotMsg = this.newBotMsg.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
    this.receiveMsg = this.receiveMsg.bind(this);
    this.dropLastMsg = this.dropLastMsg.bind(this);
    this.addBuffer = this.addBuffer.bind(this);
    this.popBuffer = this.popBuffer.bind(this);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.AutoScroll = this.AutoScroll.bind(this);
    this.botRef = React.createRef();
  }

  componentDidMount() {
    console.log("api");
    this.sendMsg("<SOD>");
  }

  newUserMsg(msg) {
    if (msg.text === "") {
      return;
    }
    let newConversation = this.state.conversation;
    if (newConversation.slice(-1)[0].type === "options") {
      newConversation.pop();
    }
    newConversation.push(msg);

    this.setState({ conversation: newConversation });
    // this.AutoScroll();
    this.props.setSearchLoading();
    this.AutoScroll();
    // send new message api
    this.sendMsg(msg.text);
  }

  newBotMsg(msg) {
    // push typing msg or loading
    let newConversation = this.state.conversation;
    newConversation.push(msg);
    this.setState({ conversation: newConversation });
    this.AutoScroll();
    // pop typing msg
  }

  sendMsg(msg) {
    console.log(this.props.keywords);
    axios
      .get(`${this.api_url}/api/response`, {
        params: {
          user_response: msg,
          keywords: JSON.stringify(this.props.keywords)
        }
      })
      .then(resp => {
        console.log(resp);
        this.receiveMsg(resp.data);
      })
      .catch(error => console.log(error));
  }

  receiveMsg(msgs) {
    let shouldBuffer = false;
    msgs.forEach(msg => {
      if (msg.type === "keyword") {
        this.props.addKeyword(msg.keyword);
        shouldBuffer = true;
      } else {
        shouldBuffer ? this.addBuffer(msg) : this.newBotMsg(msg);
      }
    });
  }

  dropLastMsg(msg) {
    let newConversation = this.state.conversation;
    const popMsg = newConversation.pop();
    if (!popMsg.options) {
      console.log(popMsg, msg);
      console.log("Warning! pop wrong message", popMsg);
    }
    this.setState({ conversation: newConversation });
  }

  addBuffer(msg) {
    let buffer = this.state.bufferMsg;
    buffer.push(msg);
    this.setState({ bufferMsg: buffer });
  }

  popBuffer(msg) {
    console.log("pop");
    let buffer = this.state.bufferMsg;
    buffer.forEach(msg => {
      this.newBotMsg(msg);
    });
    this.setState({ bufferMsg: [] });
  }

  handleOptionSelect(e) {
    e.preventDefault();
    const msgText = e.target.textContent;

    this.dropLastMsg(msgText);

    const msg = {
      speaker: "user",
      type: "text",
      text: msgText
    };

    this.newUserMsg(msg);
  }

  AutoScroll() {
    this.botRef.current.scrollTop = this.botRef.current.scrollHeight;
  }

  render() {
    return (
      <div id="kono-bot-container">
        <KonoBot
          conversation={this.state.conversation}
          handleOptionSelect={this.handleOptionSelect}
          newUserMsg={this.newUserMsg}
          botRef={this.botRef}
          popAllKeywords={this.props.popAllKeywords}
          setLoadingRecommend={this.props.setLoadingRecommend}
        />
        <MsgInputForm newMsg={this.newUserMsg} />
      </div>
    );
  }
}

export default KonoBotContainer;
