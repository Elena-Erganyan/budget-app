const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} = require('../controllers/transactionsController');

// get all transactions
router.get('/', getTransactions);

// add a new transaction
router.post('/', addTransaction);

// delete a transaction
router.delete('/:id', deleteTransaction);

// update a transaction
router.patch('/:id', updateTransaction);

module.exports = router;
