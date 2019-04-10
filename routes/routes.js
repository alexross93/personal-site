const express = require('express');
const router = require('express').Router();


/**** CONTROLLER MODULES ****/

const indexController = require('../controllers/indexController');


/**** INDEX ROUTES *****/

router.get('/', indexController.index);


/**** ERROR ROUTES *****/

router.get('*', (req, res) => {
  res.render('error');
});

module.exports = router;