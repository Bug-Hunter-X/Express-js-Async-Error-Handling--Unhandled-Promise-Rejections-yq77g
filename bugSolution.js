const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res, next) => {
  try {
    const result = await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    next(err); // Pass the error to the error handler
  }
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
} 