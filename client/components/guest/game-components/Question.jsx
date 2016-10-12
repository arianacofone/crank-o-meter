import React, { Component } from 'react';

const propTypes = {
  text: React.PropTypes.string,
  addScore: React.PropTypes.func,
  handleSubmission: React.PropTypes.func,
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    // this.answerChoiceOneHandler = this.answerChoiceOneHandler.bind(this);
  }
  // answerChoiceOneHandler() {
  //   // const answerOneRotate = document.querySelector('#crankStick');
  //   $('#crankStick').css({ transform: 'rotate(120deg)'});
  // }
  handleAnswerClick(e) {
    const values = e.target.value;
    this.props.addScore(values);
    this.props.handleSubmission();
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
