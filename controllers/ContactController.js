var express = require('express');
var router = express.Router();

const ContactService = require('../services/ContactService')

router.post('/', async function(req, res, next) {
  try {
    var body = req.body;
    var query = req.query;
    var response = await ContactService.sendEmail(body);
    res.send({
      success: true,
      response: response
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
})

module.exports = router;