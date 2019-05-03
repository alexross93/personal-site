const Book = require('../models/Book');

exports.index = (req, res) => {

 res.render('index',{ test: true});
}

