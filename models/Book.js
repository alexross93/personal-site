const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create book Schema and model
const bookSchema = new Schema ({
    title: {type: String},
    author: {type: String}
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;