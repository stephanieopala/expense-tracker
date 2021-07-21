import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionForm() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { dispatch } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TRANSACTION",
            transaction: {text: text, amount: parseInt(amount)}
        });
        setText("");
        setAmount("");
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text..." 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                    >
                    <input 
                    type="number" 
                    placeholder="Enter amount..."
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
                <input type="submit" value="Add Transaction" className="btn" />
            </form>  
        </>
    )
}

export default TransactionForm;
