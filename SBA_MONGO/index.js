const express = require('express')
require('dotenv').config()
const app = express();
const port = 3002
const conn = require('./mdb/conn')

//Books
const bookRoutes = require('./routes/booksRoutes')
const Book = require('./models/bookModel')
const starterBook = require('./mdb/bookSeed')

//Characters 
const characterRoutes = require('./routes/characterRoutes')
const Character = require('./models/characterModel')
const starterCharacter = require('./mdb/characterSeed')

//Mythical Creatures
const mythicalRoutes = require('./routes/mythicalRoutes')
const Mythical = ('./models/mythicalModel')
const starterMythical = require('./mdb/mythicalSeed')

app.use(express.json())
conn()

//middle ware
app.use('/books', bookRoutes)
app.use('/characters', characterRoutes)
app.use('/mythicals', mythicalRoutes)

app.get('/', (req,res) => {
    res.send('Percy Jackson Home Route ')
})

//Get Book seed info
app.get('/mdb/bookSeed', async (req,res) => {
    try {
        // await Book.deleteMany({})
        await Book.create(starterBook)
        res.json(starterBook)
    } catch (error) {
        console.log(`Something went wrong loading seed dat ${error.message} `)
    }
}
)

//Get Character seed info
app.get('/mdb/characterSeed', async (req,res) => {
    try {
        // await Character.deleteMany({})
        await Character.create(starterCharacter)
        res.json(starterCharacter)
    } catch (error) {
        console.log(`Something went wrong loading character seed data ${error.message} `)
    }
}
)

//Get Mythical seed info
app.get('/mdb/mythicalSeed', async (req,res) => {
    try {
        // await Mythical.deleteMany({})
        await Mythical.create(starterMythical)
        res.json(starterMythical)
    } catch (error) {
        console.log(`Something went wrong loading mythical seed data ${error.message} `)
    }
}
)

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})