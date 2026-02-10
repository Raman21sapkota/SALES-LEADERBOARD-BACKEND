

const express = require('express');
const router = express.Router();
const { addSaleRecord } = require('../controllers/salesController');


router.post('/', addSaleRecord);

module.exports = router;
