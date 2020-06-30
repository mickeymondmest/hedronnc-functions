// Import Dependencies
const express = require('express');

// Import Controller
const controller = require('../controllers/notifications');

// Initialize Router
const router = express.Router();

router.post('/email', controller.email);

router.post('/sms', controller.sms);

module.exports = router;
