import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import cookie from 'react-cookie';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Dashboard from './letter-components/Dashboard.jsx';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      token: [],
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.goToLetterView = this.goToLetterView.bind(this);
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
  goToLetterView() {
    this.props.router.push('/Dashboard');
  }
  render() {
    let userElementOptions;
    if (this.state.token) {
      userElementOptions = (
        <div>
          <Dashboard />
          <button id="logoutButton" onClick={this.logout}>LOGOUT</button>
        </div>
      );
    } else {
      userElementOptions = (
        <div id="main">
          {/* <h1> Register or Login to Create Your Letter</h1> */}
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
