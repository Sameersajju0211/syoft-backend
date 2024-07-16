const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const dotenv = require('dotenv');
const crypto = require('crypto');

dotenv.config();

// Generate a secure random string for JWT secret
const jwtSecret = crypto.randomBytes(32).toString('hex');
process.env.JWT_SECRET = jwtSecret;

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
