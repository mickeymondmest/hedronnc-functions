// Import Dependencies
const express = require('express');

// Import Routes
const notificationsRoutes = require('./notifications');

// Initialize Router
const router = express.Router();

router.use('/notifications', notificationsRoutes);

module.exports = router;
