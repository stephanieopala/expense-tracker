import React, { createContext, useReducer } from "react";
import {AppReducer} from "../reducers/AppReducer";

/*initial state
const initialState = {
    transactions : [
        { id: 1, text: "Flower", amount: -2},
        { id: 2, text: "Salary", amount: 300},
        { id: 3, text: "Books", amount: -10},
        { id: 4, text: "Camera", amount: 150}
    ]
}
*/
//create context
export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [transactions, dispatch] = useReducer(AppReducer, []);
    
    //Actions

    

    return (
        <GlobalContext.Provider value={{
            dispatch,
            transactions,
        }}> 
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;