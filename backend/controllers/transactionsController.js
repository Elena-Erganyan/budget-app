const Transaction = require('../models/transactionModel');
const mongoose = require('mongoose');

// get all transactions
const getTransactions = async (req, res) => {
  const user_id = req.user._id;
  const transactions = await Transaction.find({user_id}).sort({date: -1, createdAt: -1});
  res.status(200).json(transactions);
};

// add a new transaction
const addTransaction = async (req, res) => {
  const { title, date, type, category, amount } = req.body;

  const emptyFields = [];

  for (key in req.body) {
    if (!req.body[key]) {
      emptyFields.push(key);
    }
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill all the fields', emptyFields});
  }

  // add doc to db
  try {
    const user_id = req.user._id;
    const transaction = await Transaction.create({title, date, type, category, amount, user_id});
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// delete a transaction
const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such transaction'});
  }

  const transaction = await Transaction.findByIdAndDelete(id);

  if (!transaction) {
    return res.status(404).json({error: 'No such transaction'});
  } 

  res.status(200).json(transaction);
};

// update a transaction
const updateTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such transaction'});
  }

  const transaction = await Transaction.findByIdAndUpdate(id, {...req.body});

  if (!transaction) {
    return res.status(404).json({error: 'No such transaction'});
  } 

  res.status(200).json(transaction);
};

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
};
