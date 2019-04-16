const express = require('express');
const router = require('express').Router();
const Book = require('../models/Book');


/**** CONTROLLER MODULES ****/

const indexController = require('../controllers/indexController');


/**** INDEX ROUTES *****/

router.get('/', indexController.index);

/**** REST API ROUTES *****/

//get list of books from the database 
router.get('/api/v1/books', (req,res) => {
  res.send({type: 'GET'});
});

//create a book in the database
router.post('/api/v1/books', (req,res) => {
  Book.create(req.body).then((book) => {
    res.send({type: 'POST'});
  }); 
});

//update a book in the database
router.put('/api/v1/books/:id', (req,res) => {
  res.send({type: 'PUT'});
});

//delete a book in the database
router.delete('/api/v1/books/:id', (req,res) => {
  res.send({type: 'DELETE'});
});

/**** ERROR ROUTES *****/

router.get('*', (req, res) => {
  res.render('error');
});

module.exports = router;