import React from "react";

const TransactionItem = (props) => {
  const {amount, category, comment, date, title} = props;

  return (
    <div>
      <div>
        <h3>{title} - {category}</h3>
        <span>{date} </span>
        <span>{amount}$</span>
      </div>
      <p>{comment}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TransactionItem;