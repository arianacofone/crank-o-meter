import React, { Component } from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.questionCount = 0;
    this.state = {
      questions: [
        {
          text: 'Cool?',
          choices: ['1', '2', '3'],
        },
      ],
    };
    this.createQuestion = this.createQuestion.bind(this);
  }
  createQuestion() {
    if (this.questionCount === 0) {
      const questions = this.state.questions.concat({
        text: 'Not Cool?',
        choices: ['1', '2', '3'],
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 1) {
      const questions = this.state.questions.concat({
        text: 'Super Cool?',
        choices: ['1', '2', '3'],
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 2) {
      const questions = this.state.questions.concat({
        text: 'Super Duper Cool?',
        choices: ['1', '2', '3'],
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 3) {
      const questions = this.state.questions.concat({
        text: 'Super Not Cool?',
        choices: ['1', '2', '3'],
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else {
      console.log(this.questionCount);
    }

    console.log(this.questionCount);
  }
  render() {
    const questionElements = this.state.questions.map((question, idx) => {
      return (
        <Question
          handleSubmission={this.createQuestion}
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
