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
        <div className='main-top-bar'
          style={{
            position: 'relative',
            zIndex: 10,
            height: 63,
            boxShadow: '5px 1px 10px 0px rgba(0,0,0,0.75)',
            backgroundColor: 'lightgrey'
          }} >
        </div>
        <div
          className='top-bread-action'
          style={{
            position: 'relative',
            zIndex: 1,
            height: 54,
            backgroundColor: 'lightgrey'
          }} >
        </div>

      </div>
    );
  }
}

export { MainTopBar };