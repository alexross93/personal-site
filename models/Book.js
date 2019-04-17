const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create book Schema and model
const bookSchema = new Schema ({
    title: {type: String, required: true},
    author: {type: String, required:true}
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;