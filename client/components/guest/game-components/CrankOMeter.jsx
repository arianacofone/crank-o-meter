import React, { Component } from 'react';

class CrankOMeter extends Component {
  constructor() {
    super();
    this.crank = 0
  };
  addCrank () {
    for ( let i = 0; i <= 15; i ++){
      
    }
  }


/* when the user clicks chooses a value we will need to add the number associated with that button to the overall crank score*/
/*for each question the crank score should be increased by that number */
  }
  render() {
    return (
      <div id="crank">
        <p>CrankOMeter</p>
      </div>
    );
  }
}

export default CrankOMeter;
