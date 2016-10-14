import React, { Component } from 'react';
import CrankOMeter from './CrankOMeter.jsx';

class Header extends Component {
  render() {
    return (
      <div id="wholeHeader">
        <h1 id="logo">Crank-O-Meter</h1>
        <div id="headingLine">Let's See How Cranky You Are</div>
        <div id="header">
          {/* <p> Header is rendering</p> */}
          <CrankOMeter />
        </div>
      </div>
    );
  }
}

export default Header;
