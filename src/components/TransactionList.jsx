import { useContext } from "react";

import { GlobalContext } from "../store/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  let content;

  if (transactions.length <= 0) {
    content = <p>Please add new transaction...</p>;
  }

  if (transactions.length > 0) {
    content = (
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    );
  }

  return (
    <>
      <h3>History</h3>
      {content}
    </>
  );
}
