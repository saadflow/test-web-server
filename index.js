// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a port number
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
