import React from 'react';
import UserBalance from './UserBalance';
import BitcoinBalance from './BitcoinBalance';

const App = () => {
  return (
    <div className="ui segment">
      <h2>Wallet Balance</h2>
      <div className="ui divider"></div>
      <UserBalance />
      <div className="ui divider"></div>
      <BitcoinBalance />
      <div><a target="_blank" href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a></div>
    </div>
  );
}

export default App;