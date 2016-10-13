import React, { Component } from 'react';
import { withRouter } from 'react-router';

const propTypes = {
  handleRegister: React.PropTypes.func,
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleRegister(this.state);
    this.props.router.push('/Dashboard');
  }
  render() {
    return (
      <div id="register">
      <h1>REGISTER</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="NAME"
            onChange={this.handleInput}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="EMAIL"
            onChange={this.handleInput}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="PASSWORD"
            onChange={this.handleInput}
          />
          <input
            type="submit"
            value="register"
          />
        </form>
      </div>
    );
  }
}

Register.propTypes = propTypes;

export default withRouter(Register);
