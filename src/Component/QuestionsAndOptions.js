import React, { Component } from "react";
import { questions } from "../questions";

class QuestionsAndOptions extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    count: 0
  };
  componentDidMount() {
    this.setState({
      questions
    });
  }
  renderQuestion() {
    const { questions, currentQuestion } = this.state;
    return (
      <span>
        <div>
          <p> {questions[currentQuestion].question}</p>
        </div>
        <div>
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  onClick={() => {
                    this.selectedOption({ index });
                  }}
                />
                {option}
              </label>
            );
          })}
        </div>
      </span>
    );
  }
  selectedOption = option => {
    const { currentQuestion } = this.state;
    if (questions[currentQuestion].answer === option.index) {
      console.log("fine");
    } else {
      console.log("clown");
    }
  };
  nextQuestion = () => {
    let { currentQuestion } = this.state;
    this.setState({ currentQuestion: currentQuestion + 1 });
    console.log(currentQuestion);
  };

  render() {
    return (
      <div>
        {this.state.questions.length > 0 && this.renderQuestion()}
        <button
          onClick={() => {
            this.nextQuestion();
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default QuestionsAndOptions;
