import React, { Component } from 'react';
import request from 'superagent';
import Sentence from './Sentence.jsx';

class Letter extends Component {
  constructor() {
    super();
    this.state = {
      sentence: [],
    };
    this.handleInputEdit =this.handleInputEdit.bind(this);
    this.sendLetter = this.sendLetter.bind(this);
  }
  handleInputEdit(e) {
    const data = e.target.value;
    this.setState({
      Input: data,
    });
  }
  sendLetter({ body }) {
    //TODO: How do I send multiple inputs under one datatype?
    request.post('/api/user/letter')
           .send({ body });
  }
  render() {
    return (
      <div id="letter">
        <p> Letter is rendering </p>
        <form onSubmit={this.sendLetter}>
          <input
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Dear honey buns"
            onChange={this.handleInputEdit}
          />
          <Sentence
            // getSentence={this.getSentence}
            handleInputEdit={this.handleInputEdit}
          />
          {/* <Sentence getSentence={this.getSentence} />
          <Sentence getSentence={this.getSentence} />
          <Sentence getSentence={this.getSentence} />
          <Sentence getSentence={this.getSentence} /> */}
          <input
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Love your buddy"
            onChange={this.handleInputEdit}
          />
        </form>
      </div>
    );
  }
}

export default Letter;
