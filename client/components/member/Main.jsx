import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Home from './letter-components/Home.jsx';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      token: [],
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.updateAuthorization();
  }
  updateAuthorization() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  register(userInfo) {
    request.post('/api/register')
           .send(userInfo)
           .then(() => {
             this.updateAuthorization();
           });
  }
  login(userInfo) {
    request.post('/api/login')
           .send(userInfo)
           .then(() => {
             this.updateAuthorization();
           });
  }
  logout() {
    request.post('/api/logout')
           .then(() => this.updateAuthorization());
  }
  render() {
    let userElementOptions;
    if (this.state.token) {
      userElementOptions = (
        <div>
          <button onClick={this.logout}>LOGOUT</button>
          <Home />
        </div>
      );
    } else {
      userElementOptions = (
        <div id="main">
          <h1> Register or Login </h1>
          <Register handleRegister={this.register} />
          <Login handleLogin={this.login} />
        </div>
      );
    }
    return (
      <div>
        {userElementOptions}
      </div>
    );
  }
}

export default Main;
