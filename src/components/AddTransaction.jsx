import { useState, useContext } from "react";
// using useState for 2 ways binding

import { GlobalContext } from "../store/GlobalState";

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);

  const [input, setInput] = useState({
    text: "",
    amount: 0,
  });

  function handleTextChange(e) {
    setInput((prevInput) => ({ ...prevInput, text: e.target.value }));
  }

  function handleAmountChange(e) {
    setInput((prevInput) => ({ ...prevInput, amount: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: input.text,
      amount: +input.amount,
    };

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={input.text}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative-expense, positive - income)
          </label>
          <input
            type="number"
            value={input.value}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
