import React from "react";

const NewTransaction = () => {
  return <div>
    <h2>New transaction</h2>
    <label>Title <input type="text" /></label>
    <label>Amount <input type="number" /></label>
    <label>Income <input name="type" type="radio" value="income" /></label>
    <label>Expense <input name="type" type="radio" value="expense" /></label>
  </div>
};

export default NewTransaction;