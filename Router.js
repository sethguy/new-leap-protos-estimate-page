import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

import { EstimatePage } from './EstimatesPage'
import { CustomerPage } from './CustomerPage'

export const history = createHistory();

class Router extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HashRouter history={history} basename='/'>
        <div className='h-100'>
          <Route exact path="/customer" component={CustomerPage} />
          <Route exact path="/" component={EstimatePage} />
        </div>
      </HashRouter>);
  }
}

export {Router }