import React, { Component } from 'react';
import GrayDropDown from './GrayDropDown';
import { FilterSectionDropRow } from './FilterSectionDropRow'

const officeOptions = [
  {
    label: 'office 1',
    value: 'office 1'
  },
  {
    label: 'office 2',
    value: 'office 2'
  },
  {
    label: 'office 3',
    value: 'office 3'
  },
]


const EsitmatesFilterSection = () => {
  return (

    <div className="filter-section my-3">
      <div className="filter-section-dropdowns d-flex">
        <div style={{ flex: 1 }} className="filter-section-dropdowns-half">
          <FilterSectionDropRow {...{ options: officeOptions, title: 'Select Office' }} />
          <FilterSectionDropRow {...{ options: officeOptions, title: 'Select Office' }} />
          <FilterSectionDropRow {...{ options: officeOptions, title: 'Select Office' }} />
        </div>
        <div style={{ flex: 1 }} className="filter-section-dropdowns-half">
          <FilterSectionDropRow {...{ options: officeOptions, title: 'Select Office' }} />
          <FilterSectionDropRow {...{ options: officeOptions, title: 'Select Office' }} />
          <FilterSectionDropRow {...{ options: officeOptions, title: 'Select Office' }} />
        </div>
      </div>
      <button style={{backgroundColor:'#26D07C'}} className="btn btn-success m-3"> Search </button>
    </div>
  )
}


export {EsitmatesFilterSection}