import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Router } from './Router'

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <Router />
    );
  }
}

render(<App />, document.getElementById('root'));
