const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const primaryRoutes = require('./backend/routes/primaryRoutes.js');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Instantiate the Express application
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use("/api/", primaryRoutes);

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, './client/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
