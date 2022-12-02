const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} = require('../controllers/transactionsController');
const requireAuth = require('../middleware/requireAuth');

// require auth for all transaction routes
router.use(requireAuth);

// get all transactions
router.get('/', getTransactions);

// add a new transaction
router.post('/', addTransaction);

// delete a transaction
router.delete('/:id', deleteTransaction);

// update a transaction
router.patch('/:id', updateTransaction);

module.exports = router;
