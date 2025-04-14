// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
