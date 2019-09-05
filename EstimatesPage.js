import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { SideBarSection } from './SideBarSection'
import { MainTopBar } from './MainTopBar'
import { EstimatesCenterPage } from './EstimatesCenterPage'
import { DefaultWrapper } from './DefaultWrapper'

class EstimatePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <DefaultWrapper>
        <EstimatesCenterPage />
      </DefaultWrapper>
    );
  }
}

export { EstimatePage }