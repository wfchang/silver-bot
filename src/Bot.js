import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class Bot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {
          id: "0",
          message: "Hello World",
          trigger: "1"
        },
        {
          id: "1",
          options: [
            { value: 1, label: "Number 1", trigger: "0" },
            { value: 2, label: "Number 2", trigger: "0" },
            { value: 3, label: "Number 3", trigger: "0" },
            { value: 4, label: "Number 4", trigger: "0" },
            { value: 4, label: "Number 5", trigger: "0" }
          ]
          // user: true
          // trigger: "2"
        }
        // {
        //   id: "2",
        //   message: "Welcome, {previousValue}",
        //   end: true
        // }
      ]
    };

    // this.changeStep = this.changeStep.bind(this);
  }

  // changeStep() {
  //   let steps = this.state.steps;
  //   const newSteps = steps.push({
  //     id: "2",
  //     message: "Welcome again",
  //     // trigger: "1"
  //     end: true
  //   });

  //   this.setState({ steps: newSteps });
  // }

  render() {
    return (
      <div id="chat-bot">
        <ChatBot steps={this.state.steps} />
        {/* <button onClick={this.changeStep}>Click me!</button> */}
      </div>
    );
  }
}

export default Bot;
