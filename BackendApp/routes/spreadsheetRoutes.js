const express = require('express');
const googleController = require('./../controllers/spreadsheetController');

const router = express.Router();

router
  .route('/')
  .get(googleController.accessGoogleSheets)
  .post(googleController.addGoogleSheets)

module.exports = router;