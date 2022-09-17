import React from "react";

const NewTransaction = () => {
  return <div>
    <h2>New transaction</h2>
    <label for="title">Title</label>
    <input id="title" type="text" />
    <label for="amount">Amount</label>
    <input id="amount" type="number" />
    <label for="income">Income</label>
    <input id="income" name="type" type="radio" value="income" />
    <label for="expense">Expense</label>
    <input id="expense" name="type" type="radio" value="expense" />
  </div>
};

export default NewTransaction;