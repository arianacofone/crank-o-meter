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
    this.handleInput = this.handleInput.bind(this);
    this.sendLetter = this.sendLetter.bind(this);
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  sendLetter({ body }) {
    // TODO: How do I send multiple inputs under one datatype?
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
            name="to"
            value={this.state.to}
            placeholder="Dear honey buns"
            onChange={this.handleInput}
          />
          <Sentence />
          <Sentence />
          <Sentence />
          <Sentence />
          <Sentence />
          <input
            type="text"
            name="from"
            value={this.state.from}
            placeholder="Love your buddy"
            onChange={this.handleInput}
          />
          <button
            name="SEND"
            type="submit"
          >SEND
          </button>
        </form>
      </div>
    );
  }
}

export default Letter;
