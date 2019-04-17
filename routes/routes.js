const express = require('express');
const router = require('express').Router();
const Book = require('../models/Book');


/**** CONTROLLER MODULES ****/

const indexController = require('../controllers/indexController');


/**** INDEX ROUTES *****/

router.get('/', indexController.index);

/**** REST API ROUTES *****/

//get list of books from the database 
router.get('/api/v1/books', (req, res, next) => {
  Book.find({}).then((book) => {
    res.send(book);
  }).catch(next); 
});

//create a book in the database
router.post('/api/v1/books', (req, res, next) => {
  Book.create(req.body).then((book) => {
    console.log('Book created: ' + book);
    res.send(book);
  }).catch(next); 
});

//update a book in the database
router.put('/api/v1/books/:id', (req, res, next) => {
  Book.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).then((book) => {
    res.send(book);
  }).catch(next); 
});

//delete a book in the database
router.delete('/api/v1/books/:id', (req, res, next) => {
  Book.findOneAndRemove({_id: req.params.id}).then((book) => {
    res.send(book);
  }).catch(next); 
});

/**** ERROR ROUTES *****/

router.get('*', (req, res) => {
  res.render('error');
});

module.exports = router;