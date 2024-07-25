const express = require('express')
const router = express.Router();
const Book = require('../models/bookModel')

//show books
router.get('/', async (req,res) => {
    const allTheBooks = await Book.find({})
    res.json(allTheBooks)
})

router.get('/:id', async (req,res) => {
    console.log(req.params.id)
    try {
        const oneBook = await Book.findById(req.params.id)
        
        res.json(oneBook) 
    } catch (error) {
       // res.statusCode(500).json({msg: "Something went wrong"})
       console.log("Error getting individual book")
    }
})



module.exports = router