import React from 'react';
import {mount, shallow} from 'enzyme';
import {BitcoinBalance} from './BitcoinBalance';
import '../setupTests';
import {fetchBitcoin} from '../actions/bitcoin';

describe('BitcoinBalance', () => {
  let props = {balance: 10, bitcoin: {}};
  let bitcoinBalance = shallow(<BitcoinBalance {...props} />);

  it('renders properly', () => {
    expect(bitcoinBalance).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();

    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      bitcoinBalance = mount(<BitcoinBalance {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        balance: 10, 
        bitcoin: {bpi: {USD: {rate: '1000'}}}
      };
      bitcoinBalance = shallow(<BitcoinBalance {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(bitcoinBalance.find('h3').text()).toEqual('Bitcoin Balance: 0.01');
    })
  });
});