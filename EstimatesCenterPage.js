import React, { Component } from 'react';
import { render } from 'react-dom';
import { EsitmatesFilterSection } from './EsitmatesFilterSection';
import { EsitmatesListSection } from './EsitmatesListSection';
import { customerList } from './customerList'

class EstimatesCenterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: customerList,
    };
  }
  render() {
    return (
          <div style={{ flex: 1 }} className="stage h-100 border d-flex flex-column">
            <EsitmatesFilterSection />
            <EsitmatesListSection {...{ customers: this.state.customers }} />
          </div>
    );
  }
}

export {EstimatesCenterPage};