const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling inside the then block is insufficient
    console.error('Error:', err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // For demonstration purposes
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
}