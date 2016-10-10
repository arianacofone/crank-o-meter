import React, { Component } from 'react';
import Crank from './Crank.jsx';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <p> Header is rendering</p>
        <Crank />
      </div>
    );
  }
}

export default Header;
