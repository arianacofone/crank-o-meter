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
        <p id="instructions"> Choose One: </p>
        <div id="question-text">{this.props.text}</div>
        <ul>
          <li className="answerButton" id="answerOne" onClick={this.handleAnswerClick} value={1} >Meh</li>
          <li className="answerButton" id="answerTwo" onClick={this.handleAnswerClick} value={2} >I'm Pretty Angry</li>
          <li className="answerButton" id="answerThree" onClick={this.handleAnswerClick} value={3} >I'm Raging</li>
        </ul>
      </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;
