import React from "react";
import TransactionItem from "./TransactionItem";

const transactions = [
  {
    id: 1,
    date: '10-09-2022',
    category: 'income',
    title: 'Cash',
    comment: '', // not mandatory
    amount: 500,
  },
];

const TransactionHistory = () => {
  return <div>
    <h2>History</h2>
    <div>{transactions.map(item => 
      <TransactionItem
        amount={item.amount}
        category={item.category}
        comment={item.comment}
        date={item.date}
        key={item.id}
        title={item.title}
      />
    )}</div>
  </div>
};

export default TransactionHistory;