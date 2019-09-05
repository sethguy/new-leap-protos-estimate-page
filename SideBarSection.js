import React, { Component } from 'react';

const mainMenuOptions = [

  {
    title: 'App Settings',
    link: ''
  },
  {
    title: 'Integrations',
    link: ''
  },
  {
    title: 'Finance Options',
    link: ''
  },
  {
    title: 'Resources',
    link: ''
  },
  {
    title: 'Packages',
    link: ''
  },
  {
    title: 'Contracts',
    link: ''
  },
  {
    title: 'Proposal',
    link: ''
  },
  {
    title: 'Credit Applications',
    link: ''
  },
]

const SideBarSection = (props) => {

  const { } = props;

  return (
    <div
      style={{
        width: 200,
        backgroundImage: 'linear-gradient(#8DDD65, #26D07C)'
      }}
      className='d-flex flex-column h-100'>
      <div style={{ height: 50, width: 200, backgroundColor: 'white' }} >
      </div>
      <div className='d-flex' style={{ flex: 1 }} >
        <div className='h-100' style={{ flex: 1, overflow: 'scroll' }} >
          {mainMenuOptions.map(option => {
            return (
              <div key={option.title} className='ml-3 my-3' >
                <span href='' style={{ fontSize: 16, fontWeight: '600' }} >{option.title}</span>
              </div>
            )
          })}
        </div>

        <div className='h-100 d-flex align-items-center justify-content-center'
          style={{
            width: 20,
            backgroundColor: 'lightgrey',
          }} >
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
  )
}


export { SideBarSection }