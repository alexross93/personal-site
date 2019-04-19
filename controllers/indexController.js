const Book = require('../models/Book');

exports.index = (req, res) => {
 
  var error = '';
  Book.find({}, function(err, books) {
    if(err){error = 'no books';
  }else{
      error = 'got some books'
  }
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