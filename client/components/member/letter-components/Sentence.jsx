import React, { Component } from 'react';

const propTypes = {
  getSentence: React.PropTypes.func,
  sendSentence: React.PropTypes.func,
};

class Sentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleInputEdit = this.handleInputEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputEdit(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendSentence(this.state);
  }
  render() {
    return (
      <div id="sentence">
        <form onSubmit={this.handleSubmit}
          <input
            type="text"
            name="body"
            value={this.props.getSentence}
            onChange={this.handleInputEdit}
          />
        />
      </div>
    );
  }
}

Sentence.propTypes = propTypes;

export default Sentence;
