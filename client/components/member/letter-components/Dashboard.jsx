import React, { Component } from 'react';
import SentenceAPI from './SentenceAPI.jsx';
import Home from './Home.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div id="user-db">
        <p> DASHBOARD </p>
        <SentenceAPI />
        <Home />
      </div>
    );
  }
}

export default Dashboard;
