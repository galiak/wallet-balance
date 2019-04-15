import React from 'react';
import {shallow} from 'enzyme';
import {UserBalance} from './UserBalance';
import '../setupTests';

describe('UserBalance', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = {balance: 20, deposit: mockDeposit, withdraw: mockWithdraw};
  const wallet = shallow(<UserBalance {...props} />);
  
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Balance: 20');
  });

  it('create an input to deposit/withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when a user types in the wallet input', () => {
    const userBalance = '25';
    
    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', {target: {value: userBalance}});
    });

    it('updates the local balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it('dispatches the `deposit()` it receives from props with the local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('and the user wants to withdraw', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('dispatches the `withdraw()` it receives from props with the local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});