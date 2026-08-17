const express = require('express');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(express.json());

// Basic health check endpoint
app.use('/api/health', healthRoutes);

module.exports = app;
