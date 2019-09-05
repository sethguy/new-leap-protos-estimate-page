import React, { Component } from 'react';
import GrayDropDown from './GrayDropDown';

const FilterSectionDropRow = (props) => {
  return (
    <div style={{ flex: 1 }} className="filter-section-input-row d-flex m-3 align-items-center">
      <div style={{ flex: .3 }} className="filter-section-dropdown-title mr-2">
        <span style={{fontSize:16,fontWeight:600}}>  {props.title}</span>
      </div>
      <div style={{ flex: 1 }} className="filter-section-dropdown-element-container">
        <GrayDropDown {...{ options: props.options }} />
      </div>
    </div>
  )
}


export {FilterSectionDropRow}