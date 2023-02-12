import React, { useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";
const IncomeExpenses = () => {
  const { transaction } = useContext(GlobalContext);
  const amount = transaction.map((val) => val.amount);
  const income = amount
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0);
  const expenses = amount
    .filter((val) => val < 0)
    .reduce((acc, val) => acc + val, 0);
  //const income = plus.reduce((acc, val) => acc + val, 0);
  //const expenses = minus.reduce((acc, val) => acc + val, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${Math.abs(expenses)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
