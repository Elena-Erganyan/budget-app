require('dotenv').config(0);

const express = require('express');
const mongoose = require('mongoose');
const transactionsRoutes = require('./routes/transactionsRoutes');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/transactions', transactionsRoutes);

// connect to db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
