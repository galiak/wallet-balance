import React from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from '../actions/bitcoin';

export class BitcoinBalance extends React.Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  calculateBitcoin() {
    const {bitcoin} = this.props;
    if (Object.keys(bitcoin).length === 0) {
      return '';
    } 
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(/,/g,''), 10);
  }

  render() {
    return (
      <h3>Bitcoin Balance: {this.calculateBitcoin()}</h3>
    )
  }
}

export default connect(state => state, {fetchBitcoin})(BitcoinBalance);