import React, { Component } from 'react';
import { render } from 'react-dom';

class MainTopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='main-top-bar-section' style={{ backgroundColor: 'lightgrey' }} >

        <div className='main-top-bar' style={{ height: 63, boxShadow: '5px 10px #888888', backgroundColor: 'lightgrey' }} >
        </div>

        <div className='main bread-action' style={{ height: 54, backgroundColor: 'white' }} >
        </div>

      </div>
    );
  }
}

export { MainTopBar };