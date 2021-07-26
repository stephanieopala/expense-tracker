import React, { createContext, useReducer, useEffect } from "react";
import {AppReducer} from "../reducers/AppReducer";

//create context
export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [transactions, dispatch] = useReducer(AppReducer, [], () => {
        const localData = localStorage.getItem("transactions");
        return localData ? JSON.parse(localData) : [];
    });
    
    //local storage
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions), [transactions]);
    })

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