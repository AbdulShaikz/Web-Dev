const express = require('express');
const {handleRedirectUrl} = require('../controllers/redirect');

const router = express.Router();

router.get("/:shortId", handleRedirectUrl);

module.exports = router;