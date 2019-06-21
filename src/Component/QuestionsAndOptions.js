import React, { Component } from "react";
import { questions } from "../questions";

class QuestionsAndOptions extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    finished: false,
    showResults: false,
    chosen: false
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
    this.setState({
      chosen: true
    });
    const { currentQuestion } = this.state;
    let { score } = this.state;
    if (questions[currentQuestion].answer === option.index) {
      score = score + 1;
      this.setState({ score });
    }
  };
  nextQuestion = () => {
    if (!this.state.chosen) {
      return alert("Select an option");
    }
    const radios = document.querySelectorAll(".radios");
    radios.forEach(radio => {
      radio.checked = radio.checked && !radio.checked;
    });

    let { currentQuestion, questions } = this.state;
    if (currentQuestion === questions.length - 2) {
      this.setState({
        finished: true
      });
    }
    if (currentQuestion === questions.length - 1) {
      this.setState({
        showResults: true
      });
    }
    this.setState({ currentQuestion: currentQuestion + 1, chosen: false });
    console.log(currentQuestion);
  };
  renderAnswer() {
    const { score } = this.state;
    return <h1>Score: {score}</h1>;
  }
  render() {
    let { finished, showResults, chosen } = this.state;

    if (showResults) {
      return <>{this.renderAnswer()}</>;
    }

    return (
      <div>
        {this.state.questions.length > 0 && this.renderQuestion()}
        <button
          onClick={() => {
            this.nextQuestion();
          }}
        >
          {finished ? "Finish" : "Next"}
        </button>
      </div>
    );
  }
}

export default QuestionsAndOptions;
