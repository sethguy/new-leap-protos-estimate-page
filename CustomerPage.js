import React, { Component } from 'react';
import { render } from 'react-dom';

import { DefaultWrapper } from './DefaultWrapper'

const SectionTitle = (props) => {

  const { title } = props;

  return (
    <div className='secttion-title'>
      <h2 style={{ fontSize: 48, fontWeight: '800' }} >{title}</h2>
      <div style={{ backgroundColor: '#26D07C', borderRadius: 10, height: 8, width: 230 }} />
    </div>
  );
}

const FeildTitle = (props) => {

  const { title } = props;

  return (
    <span className='field-title' style={{ fontSize: 24, fontWeight: '700' }} >{title}</span>
  );
}


const FeildDisplayList = (props) => {

  const { title, list = [], colClass = 'col-md-3' } = props;

  return (
    <div className={`d-flex flex-column ${colClass} mr-3`}>
      <FeildTitle {...{ title }} />
      {list.map(item => {
        return (
          <React.Fragment>
            {
              (item.label && item.label.length)
              && <span style={{ fontSize: 16, fontWeight: '600' }}> {item.label}</span>
            }
            <span style={{ fontSize: 18, fontWeight: '300' }}> {item.value}</span>
          </React.Fragment>
        )
      })}

    </div>
  );
}

const actionIcons = [

  {
    name: 'Report',
    iconClass: 'far fa-clipboard'
  },
  {
    name: 'Contract',
    iconClass: 'far fa-clipboard'
  },
  {
    name: 'Results',
    iconClass: 'far fa-clipboard'
  },
  {
    name: 'Log',
    iconClass: 'far fa-file-alt'
  },
  {
    name: 'Download All',
    iconClass: 'far fa-folder-open'
  },
];

class CustomerPage extends Component {
  constructor() {
    super();
    this.state = {
      logs: [{
        time: '10:07',
        value: 'hot cakes Lorem Ipsum Dolorem'
      },
      {
        time: '10:07',
        value: 'hot cakes'
      },
      {
        time: '10:07',
        value: 'hot cakes'
      }


      ],
      sale: {

        pricingOptions: [
          {
            label: 'Floor:',
            value: '$12,456.00',
          },
          {
            label: 'Initial Visit:',
            value: '$12,456.00',
          },
          {
            label: 'Retail:',
            value: '$12,456.00',
          },
          {
            label: 'Reduced Rate:',
            value: '$12,456.00',
          },
        ],
        result: [
          {
            label: 'Sale:',
            value: 'Yes',
          },
          {
            label: 'Contract Sent:',
            value: 'Yes',
          },
          {
            label: 'Fin Offered:',
            value: 'Yes',
          },
          {
            label: 'Fin Submitted',
            value: 'Yes',
          },
        ]

      },
      customer: {
        user: {
          name: 'steve'
        },
        name: 'john Doe',
        email: 'john@doe',
        phone: '4545153595',
        address: ['123 cool str', ' gold city'],
        spouse: {
          name: 'mary jane',
          added: '7/7/2015'
        }

      }
    };
  }

  render() {

    const pricingOptionsList = this.state.sale.pricingOptions
    const resultList = this.state.sale.result

    return (
      <DefaultWrapper>
        <div style={{ flex: 1, overflow: 'scroll' }} className="stage h-100 border d-flex p-3 flex-column">
          <div className="title-section my-3">
            <span style={{ fontSize: 24, fontWeight: '600' }}> {this.state.customer.name}</span>
            <br />
            <span style={{ fontSize: 12, color: '#26D07C', fontWeight: '800' }}>USER: </span>
            <span style={{ fontSize: 16, fontWeight: '800' }}>{this.state.customer.user.name} </span>
          </div>
          <br />
          <div className="action-icons-section row ml-2">
            {actionIcons.map(action => {
              return (
                <div className="col-md-2">
                  <div className="col-md-2 d-flex flex-column align-items-center">
                    <i className={`${action.iconClass} fa-4x`}></i>
                    <a href='' style={{ fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>{action.name}</a>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <div className="customer-meta-section my-2">
            <SectionTitle {...{ title: 'Customer' }} />
            <div className="feild-section my-1">
              <div className="feild-section-row my-2 row">
                <FeildDisplayList {...{ title: 'Customer', list: [{ value: this.state.customer.name }] }} />
                <FeildDisplayList {...{ title: 'Address', list: [...this.state.customer.address.map(line => ({ value: line }))] }} />
                <FeildDisplayList {...{ title: 'Phone Number', list: [{ value: this.state.customer.phone }] }} />
              </div>
              <div className="feild-section-row my-2 row">
                <FeildDisplayList {...{
                  title: 'Spouse Added', list: [
                    { value: this.state.customer.spouse.name },
                    { label: this.state.customer.spouse.added }
                  ]
                }} />
                <FeildDisplayList {...{ title: 'Email Address', list: [{ value: this.state.customer.email }] }} />
              </div>
            </div>
          </div>
          <div className="sale-meta-section">
            <SectionTitle {...{ title: 'Sale' }} />
            <div className="feild-section my-1">
              <div className="feild-section-row my-2 row">
                <FeildDisplayList {...{ colClass: 'col-md-4', title: 'Pricing Options', list: [...pricingOptionsList] }} />
                <FeildDisplayList {...{ colClass: 'col-md-4', title: 'Result', list: [...resultList] }} />
              </div>
            </div>
          </div>
          <div className="appointment-meta-section">
            <SectionTitle {...{ title: 'Appointment' }} />
            <div className="feild-section my-1">
              <div className="feild-section-row my-2 row">
                <FeildDisplayList {...{
                  colClass: 'col-md-4',
                  title: 'Appointment Time',
                  list: [
                    {
                      label: 'Time',
                      value: 'July 23rd 2019, 10:00 AM'
                    },
                    {
                      label: 'Duration',
                      value: '92384.34'
                    },
                    {
                      label: 'On Time',
                      value: 'No / Yes'
                    },
                  ]
                }}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="logs-section">
            <h2 style={{ fontWeight: '800' }} className="mb-3">Log</h2>
            <table className='table table-bordered col-md-6' >
              <tr>
                <th style={{ fontSize: 24, textAlign: 'center', fontWeight: '600' }}>Time</th>
                <th style={{ fontSize: 24, textAlign: 'center', fontWeight: '600' }} > Logs</th>
              </tr>

              {this.state.logs.map(log => {
                return (
                  <tr>
                    <td style={{ fontSize: 16, textAlign: 'center', fontWeight: '600' }}  >
                      {log.time}
                    </td>
                    <td style={{ fontSize: 16, textAlign: 'center', fontWeight: '600' }}  >
                      {log.value}
                    </td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </DefaultWrapper>
    );
  }
}

export { CustomerPage }