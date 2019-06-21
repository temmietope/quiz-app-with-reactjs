import React, { Component } from "react";
import { questions } from "../questions";

class QuestionsAndOptions extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    score: 0
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
                  className="radios"
                  onChange={() => {
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
    let { score } = this.state;
    if (questions[currentQuestion].answer === option.index) {
      score = score + 1;
      this.setState({ score });
      console.log(score);
    } else {
      console.log("clown");
    }
  };
  nextQuestion = () => {
    const radios = document.querySelectorAll(".radios");
    radios.forEach(radio => {
      radio.checked = radio.checked && !radio.checked;
    });
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
