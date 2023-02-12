import React, { useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((val) => (
          <Transaction val={val} key={val.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
