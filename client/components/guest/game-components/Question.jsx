import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.rage = 3;
    this.angry = 2;
    this.meh = 1;
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
          <li id="answerOne" onClick={this.handleAnswerClick} value={1} >meh</li>
          <li id="answerTwo" onClick={this.handleAnswerClick} value={2} >angry</li>
          <li id="answerThree" onClick={this.handleAnswerClick} value={3} >rage</li>
        </ul>
      </div>
    );
  }
}

export default Question;
