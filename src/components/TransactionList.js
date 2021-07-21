import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import TransactionDetail from './TransactionDetail';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>Last Transactions</h3>
            <ul className="list">
                { transactions.map(transaction => (
                    <TransactionDetail transaction={transaction} key={transaction.id}/>
                ))}
                 
            </ul> 
        </>
    )
}

export default TransactionList;
