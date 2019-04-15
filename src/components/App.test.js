import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import '../setupTests';


describe('App', () => {
  const app = shallow(<App/>);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    // console.log(app.debug());

    expect(app.find('Connect(UserBalance)').exists()).toBe(true);
  });

  it('contains a connected BitcoinBalance component', () => {
    expect(app.find('Connect(BitcoinBalance)').exists()).toBe(true);
  })

  it('contains a link to the coindesk price page', () => {
    expect(app.find('a').props().href).toBe('https://www.coindesk.com/price/bitcoin');
  });
});