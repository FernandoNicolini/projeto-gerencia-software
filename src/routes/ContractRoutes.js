const express = require('express');
const ContractController = require('../controllers/ContractController');

const router = express.Router();

router.get('/:profileId', ContractController.getContracts);

module.exports = router;
