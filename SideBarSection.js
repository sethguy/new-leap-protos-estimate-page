import React, { Component, useState } from 'react';

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

  const [sideBareWidth, setWidth] = useState(200)

  return (
    <div
      style={{
        width: sideBareWidth,
        backgroundImage: 'linear-gradient(#8DDD65, #26D07C)',
        transition: 'width .5s'
      }}
      className='d-flex flex-column h-100'>
      <div style={{ height: 117, width: sideBareWidth, backgroundColor: 'white' }} >
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

        <div
          onClick={() => {
            setWidth(sideBareWidth == 200 ? 20 : 200)
          }}
          className='h-100 d-flex align-items-center justify-content-center'
          style={{
            width: 20,
            backgroundColor: 'lightgrey',
          }} >
          <i className={`fas fa-chevron-${sideBareWidth == 200 ? 'left' : 'right'}`}></i>
        </div>
      </div>
    </div>
  )
}


export { SideBarSection }