import { useContext } from "react";

import { GlobalContext } from "../store/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((total, cur) => total + cur, 0)
    .toFixed(2);

  // console.log(totalIncome);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((total, cur) => total + cur, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${totalExpense}
        </p>
      </div>
    </div>
  );
}
