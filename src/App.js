import "./App.css";

import GlobalContextProvider from "./store/GlobalState.jsx";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <GlobalContextProvider>
      <Header children="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
