const express = require('express');
const ProfileController = require('../controllers/ProfileController');

const router = express.Router();

router.post('/:profileId/deposit', ProfileController.deposit);

module.exports = router;
