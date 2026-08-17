const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const vesselRoutes = require('./routes/vesselRoutes');

const app = express();

app.use(express.json());

// Basic health check endpoint
app.use('/api/health', healthRoutes);
app.use('/api/voyages', vesselRoutes);

module.exports = app;
