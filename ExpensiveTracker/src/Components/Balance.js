import React, { useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";
const Balance = () => {
  const context = useContext(GlobalContext);
  const { transaction } = context;
  const amount = transaction.map((val) => val.amount);
  const total = amount.reduce((acc, val) => val + acc, 0);
  console.log(total);
  console.log(amount);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </>
  );
};
export default Balance;
