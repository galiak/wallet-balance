import * as constants from '../actions/constants';
import {read_cookie, bake_cookie} from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, actions) => {
  let balance;

  switch(actions.type) {
    case constants.SET_BALANCE:
      balance = actions.balance;
      break;
    case constants.DEPOSIT:
      balance = state + actions.deposit;
      break;
    case constants.WITHDRAW:
      balance = state - actions.withdrawal;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);
  
  return balance;
}

export default balance;