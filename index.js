import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { EstimatePage } from './EstimatesPage'
import { CustomerPage } from './CustomerPage'

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <CustomerPage />
    );
  }
}

render(<App />, document.getElementById('root'));
