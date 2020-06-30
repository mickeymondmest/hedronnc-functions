// Import Dependencies
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

// Initialize App
const app = express();

// Apply Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Hedron NC Functions Live at ${PORT}`);
});
