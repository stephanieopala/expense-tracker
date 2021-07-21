import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount); //array of all amounts
  console.log(amounts);
  const total = amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //sum to 2 decimal places
    return (
        <>
          <h4>Current Balance</h4> 
          <h1>$ {total} </h1> 
        </>
    )
}

export default Balance;
