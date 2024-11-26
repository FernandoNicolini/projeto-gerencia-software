const express = require('express');
const JobController = require('../controllers/JobController');

const router = express.Router();

router.get('/:contractId/unpaid', JobController.getUnpaidJobs);

module.exports = router;
