import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { SideBarSection } from './SideBarSection'

import { MainTopBar } from './MainTopBar'
import { EstimatesCenterPage } from './EstimatesCenterPage'

class DefaultWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='d-flex  h-100'>
        <SideBarSection />
        <div style={{ flex: 1 }} className='d-flex flex-column h-100'>
          <MainTopBar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { DefaultWrapper }