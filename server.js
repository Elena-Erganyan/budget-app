require('dotenv').config(0);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionsRoutes = require('./routes/transactionsRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use('/api/user', userRoutes);
app.use('/api/transactions', transactionsRoutes);

// connect to db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
