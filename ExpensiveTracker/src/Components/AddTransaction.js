import React, { useState, useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";

const AddTransaction = () => {
  const context = useContext(GlobalContext);
  const { addTransaction } = context;
  const [data, setData] = useState({
    text: "",
    amount: 0,
  });
  const { text, amount } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: new Date().getTime().toString(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text.."
            value={text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expense,positive-income)
          </label>
          <input
            type="number"
            placeholder="Enter amount.."
            value={amount}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
          />
        </div>
        <button className="btn" value="submit">
          Add transcation
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
