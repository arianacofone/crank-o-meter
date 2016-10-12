import React, { Component } from 'react';

class CrankOMeter extends Component {
  constructor (props) {
    super(props);
    this.answerChoiceOneHandler = this.answerChoiceOneHandler.bind(this);
  }
  answerChoiceOneHandler() {
    const answerOneRotate = document.querySelector('#crankStick');
    $('#crankStick').css({ transform: 'rotate(120deg + )'});
  }
  render() {
    return (
      <div id="crank">
        <p>CrankOMeter</p>
        <div id="crankStick"></div>
      </div>
    );
  }
}

export default CrankOMeter;
