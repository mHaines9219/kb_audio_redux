// backend/server.js
const express = require('express');
const connectDB = require('./config/db'); // Adjust the path according to your structure

require('dotenv').config();

const productRoutes = require('./routes/productRoutes'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define a simple route for testçing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
