import React, { Component } from 'react';

const propTypes = {
  text: React.PropTypes.string,
  addScore: React.PropTypes.func,
  handleSubmission: React.PropTypes.func,
  clientScore: React.PropTypes.number,
  total: React.PropTypes.number,
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.answerChoiceHandler = this.answerChoiceHandler.bind(this);
  }
  answerChoiceHandler() {
    $('#crankStick').css({ transform: `rotate(${120 + ((3) * 12)}deg)` });
  }

  handleAnswerClick(e) {
    const values = e.target.value;
    this.props.addScore(values);
    this.props.handleSubmission();
    this.answerChoiceHandler(e);
  }
  render() {
    return (
      <div id="question">
        <p> Question </p>
        <div id="question-text">{this.props.text}</div>
        <ul>
          <li className="answerButton" id="answerOne" onClick={this.handleAnswerClick} value={1} >meh</li>
          <li className="answerButton" id="answerTwo" onClick={this.handleAnswerClick} value={2} >angry</li>
          <li className="answerButton" id="answerThree" onClick={this.handleAnswerClick} value={3} >rage</li>
        </ul>
      </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;
