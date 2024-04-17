// routes.js

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// Middleware to parse JSON
router.use(bodyParser.json());

// Middleware to log request payload and modify lastName
router.use((req, res, next) => {
  console.log('Original request payload:', req.body);
  if (req.body.lastName) {
    req.body.lastName = req.body.lastName.charAt(0); // Keep only the first initial
  }
  next();
});

// Middleware to check if age is less than 18
router.post('/users', (req, res, next) => {
  if (req.body.age < 18) {
    return res.status(400).json({ message: 'user is not an adult' });
  }
  // If age is 18 or higher, proceed to the next middleware
  next();
});

// POST /users endpoint
router.post('/users', (req, res) => {
  // Return the same object with status code 201
  res.status(201).json(req.body);
});

module.exports = router;
