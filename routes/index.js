const express = require('express');
const router = express.Router();
const marcoPolo = require('../marcopolo')

/* GET home page. */
router.get('/', async function (req, res) {
    return marcoPolo(res, 1_000_000);
});

module.exports = router;
