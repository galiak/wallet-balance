import React from 'react';
import {connect} from 'react-redux';
import {deposit, withdraw} from '../actions/balance';

export class UserBalance extends React.Component {
  state = {balance: undefined};

  update = event => this.setState({balance: parseInt(event.target.value, 10)});

  deposit = () => this.props.deposit(this.state.balance);

  withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    return (
      <div> 
        <h3 className="balance">Balance: {this.props.balance}</h3>
        <div className="ui input">
          <input className="input-wallet ui input" onChange={this.update} />
          <div className="ui buttons">
            <button className="btn-deposit ui positive button" onClick={this.deposit}>Deposit</button>
            <div className="or"></div>
            <button className="btn-withdraw ui button" onClick={this.withdraw}>Withdraw</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => {return {balance: state.balance}}, {deposit, withdraw})(UserBalance);