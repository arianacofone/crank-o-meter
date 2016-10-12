import React, { Component } from 'react';
import request from 'superagent';
import Sentence from './Sentence.jsx';

class Letter extends Component {
  constructor() {
    super();
    this.state = {
      to: '',
      from: '',
    };
    this.handleInputEdit =this.handleInputEdit.bind(this);
    this.sendLetter = this.sendLetter.bind(this);
  }
  handleInputEdit(e) {
    const target = e.target;
    const value = target.value;
    this.setState(value);
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
            name="name"
            value={this.state.to}
            placeholder="Dear honey buns"
            onChange={this.handleInputEdit}
          />
          <Sentence
            handleInputEdit={this.handleInputEdit}
          />
          <input
            type="text"
            name="name"
            value={this.state.from}
            placeholder="Love your buddy"
            onChange={this.handleInputEdit}
          />
        </form>
      </div>
    );
  }
}

export default Letter;
