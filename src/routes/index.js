const express = require('express');
const profileRoutes = require('./ProfileRoutes');
const contractRoutes = require('./ContractRoutes');
const jobRoutes = require('./JobRoutes');

const router = express.Router();

router.use('/profiles', profileRoutes);
router.use('/contracts', contractRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;
