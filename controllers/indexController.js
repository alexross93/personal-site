const Book = require('../models/Book');

exports.index = (req, res) => {
 
  var error = 'start';
  Book.find({}, function(err, books) {
    if(err){error = 'no books';}

    error = 'ok';
  });

  /* 
  
      var bookMap = {};

    books.forEach(function(book) {  
      bookMap[book._id] = book;
    });
  {bookMap: bookMap}
  */

 res.render('index',{error: error});
}