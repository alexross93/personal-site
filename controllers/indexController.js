const Book = require('../models/Book');

exports.index = (req, res) => {
 
  Book.find({}, function(err, books) {
    var bookMap = {};

    books.forEach(function(book) {  
      bookMap[book._id] = book;
    });

      res.render('index', {bookMap: bookMap});
  });

}