import React, { Component } from 'react';
import GrayDropDown from './GrayDropDown';
import { history } from './Router'
const EsitmatesListSection = (props) => {

  const { customers } = props;

  return (
    <div style={{ flex: 1, overflow: 'scroll' }} className="list-section border m-3">

      {customers.map((customer, i) => {

        return (
          <div
            key={`${customer.name} - ${i}`}
            style={{
              padding: 10,
              backgroundColor: i % 2 ? 'white' : '#E5E5E5'
            }}
            onClick={() => {
              window.location.href = '/#/customer'
            }}
            className='d-flex align-items-center' >
            <div style={{ flex: 1 }} >
              <span style={{ fontSize: 24, fontWeight: 600 }}> {customer.name}</span>
              <br />
              <span style={{ fontSize: 12, color: '#26D07C', fontWeight: '800' }}>USER: </span>
              <span style={{ fontSize: 16, fontWeight: '800' }}>{customer.user.name} </span>
              <span style={{ fontSize: 16, fontWeight: '300' }}> | mm/dd/yyyy</span>
            </div>
            <div className='d-flex flex-column align-items-center m-2'  >
              <i class="far fa-folder-open fa-5x"></i>
              <a href='' style={{ fontSize: 16, fontWeight: '600' }} >Documents</a>
            </div>
            <div style={{ width: 50 }} />
            <div className='d-flex flex-column align-items-center m-2'  >
              <i class="far fa-file-alt fa-5x"></i>
              <a href='' style={{ fontSize: 16, fontWeight: '600' }} >Logs</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export { EsitmatesListSection }