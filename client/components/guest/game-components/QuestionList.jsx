import React, { Component } from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  constructor() {
    super();
    this.questionCount = 0;
    this.state = {
      questions: [
        {
          text: 'Cool?',
        },
      ],
      clientScore: 0,
    };
    this.createQuestion = this.createQuestion.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }
  changeScore(values) {
    const clicked = values;
    const clientScore = this.state.clientScore;
    const total = (clientScore + clicked);
    this.setState({ clientScore: total });
  }

  createQuestion() {
    if (this.questionCount === 0) {
      const questions = this.state.questions.concat({
        text: 'Not Cool?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 1) {
      const questions = this.state.questions.concat({
        text: 'Super Cool?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 2) {
      const questions = this.state.questions.concat({
        text: 'Super Duper Cool?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 3) {
      const questions = this.state.questions.concat({
        text: 'Super Not Cool?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else {
      console.log(this.questionCount);
    }
    console.log(this.state.clientScore)
  }
  finalScore() {
    
  }
  render() {
    const questionElements = this.state.questions.map((question, idx) => {
      return (
        <Question
          handleSubmission={this.createQuestion}
          addScore={this.changeScore}
          key={idx}
          text={question.text}
          choices={question.choices}
        />
      );
    });
    return (
      <div id="question-list">
        <p> Question List is rendering</p>
        {questionElements}
      </div>
    );
  }
}

export default QuestionList;
