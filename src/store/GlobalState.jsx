import { createContext, useReducer } from "react";

import AppReducer from "./AppReducer.jsx";

const initialState = {
  transactions: [],

  deleteTransaction: () => {},
  addTransaction: () => {},
};

export const GlobalContext = createContext(initialState);

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //ACTIONS
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANS", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANS",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
