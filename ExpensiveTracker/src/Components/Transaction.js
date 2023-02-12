import React, { useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";
const Transaction = ({ val }) => {
  const context = useContext(GlobalContext);
  const { deleteTransaction } = context;
  const sign = val.amount > 0 ? "+" : "-";
  return (
    <li className={val.amount > 0 ? "plus" : "minus"}>
      {val.text}
      <span>
        {sign}${Math.abs(val.amount)}
      </span>
      <button onClick={() => deleteTransaction(val.id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

export default Transaction;
