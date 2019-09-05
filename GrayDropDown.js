import React, { Component } from 'react';
import { render } from 'react-dom';
import MultiSelectComponent from '@khanacademy/react-multi-select';

class GrayDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options:props.options ||[],
      selected:props.selected ||[],
    };
  }

  onSelectedChanged = () =>{

  }

  render() {
    return (
      <MultiSelectComponent
        selected={this.state.selected}
        onSelectedChanged={this.onSelectedChanged}
        options={this.state.options}
        // hasSelectAll={options.length > 1}
        disableSearch={this.state.options.length <= 1}
      />
    );
  }
}

export default GrayDropDown;