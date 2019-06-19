import React, { Component } from "react";
import { questions } from "../questions";

class QuestionsAndOptions extends Component {
  state = {
    questions: ""
  };
  componentDidMount() {
    this.setState({ questions: questions });
  }
  loadQuestion = () => {
    let index = 0;
    const q = this.state.questions[index];
    console.log(q.question);
    console.log(q.options);
    return <span>{q.question}</span>;
  };
  render() {
    return (
      <div className="wrapper">
        <div className="exactQuestion" ref="exactQuestion">
          {this.state.questions.length > 0 && this.loadQuestion()}
        </div>
        <div className="options">
          <label className="option">
            <input type="radio" name="option" value="1" />
            <span id="opt1" />
          </label>
          <label className="option">
            <input type="radio" name="option" value="2" />
            <span id="opt2" />
          </label>
          <label className="option">
            <input type="radio" name="option" value="3" />
            <span id="opt3" />
          </label>
          <label className="option">
            <input type="radio" name="option" value="4" />
            <span id="opt4" />
          </label>
        </div>
      </div>
    );
  }
}

export default QuestionsAndOptions;
