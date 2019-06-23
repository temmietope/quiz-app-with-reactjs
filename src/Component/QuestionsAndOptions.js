import React, { Component } from "react";
import { questions } from "../questions";

class QuestionsAndOptions extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    finished: false,
    lastClicked: null,
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
        <div className="questionDiv">
          <p> {questions[currentQuestion].question}</p>
        </div>
        <div className="optionsDiv">
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <label
                key={index}
                className="option"
                onClick={e => {
                  this.changeColor(e, index);
                }}
              >
                <input
                  type="radio"
                  name="option"
                  className="radios"
                  onChange={e => {
                    this.selectedOption({ index }, e);
                  }}
                />
                <span className="exactOption">{option}</span>
              </label>
            );
          })}
        </div>
      </span>
    );
  }
  changeColor = (e, index) => {
    const { lastClicked } = this.state;
    const optionArray = document.querySelectorAll(".exactOption");
    if (lastClicked != null) {
      optionArray[lastClicked].style.color = "blue";
      this.setState({ lastClicked: index });
      optionArray[index].style.color = "red";
    } else {
      e.target.style.color = "red";
      this.setState({ lastClicked: index });
    }
  };
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
    const optionArray = document.querySelectorAll(".exactOption");
    optionArray.forEach(option => {
      option.style.color = "blue";
    });
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
  };
  renderAnswer() {
    const { score } = this.state;
    return <h1>Score: {score}</h1>;
  }
  render() {
    let { finished, showResults } = this.state;

    if (showResults) {
      return <>{this.renderAnswer()}</>;
    }

    return (
      <div>
        {this.state.questions.length > 0 && this.renderQuestion()}
        <div className="button">
          <button
            onClick={() => {
              this.nextQuestion();
            }}
          >
            {finished ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionsAndOptions;
