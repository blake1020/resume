const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    releaseYear: {
      type:  Number,
    required: true,
    },
    series:{
      type:  String,
    required: true
    
    }
})

const Book = mongoose.model('book', BookSchema )

module.exports = Book;