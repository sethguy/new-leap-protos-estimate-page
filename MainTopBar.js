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
          <div className='main top bar' style={{ height: 50, backgroundColor: 'lightgrey' }} >
          </div>
    );
  }
}

export {MainTopBar};