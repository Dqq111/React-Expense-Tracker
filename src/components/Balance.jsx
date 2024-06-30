import { useContext } from "react";

import { GlobalContext } from "../store/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((total, cur) => total + cur, 0)
    .toFixed(2);

  // console.log(total);

  const sign = total > 0 ? "+" : "-";

  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1 id="balance">
        {sign}${Math.abs(total)}
      </h1>
    </>
  );
}
