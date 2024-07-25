const express = require('express')
const router = express.Router();
const Character = require('../models/characterModel')


router.get('/', async (req,res) => {
    const allTheCharacters = await Character.find({})
    res.json(allTheCharacters)
})

//individual character
router.get('/:id', async (req,res) => {
    console.log(req.params.id)
    try {
        const oneCharacter = await Character.findById(req.params.id)
        res.json(oneCharacter) 
    } catch (error) {
        //res.statusCode(500).json({msg: "Something went wrong"})
        console.log("error geting individual character")
    }
})

//Create new character
router.post('/', async (req, res) => {
    console.log(req.body)    
    const createCharacter = await Character.create(req.body)
        
        res.json(createCharacter)
    
} )

//Update - Patch
router.patch('/:id', async (req,res) => {
    const updateCharacter = await Character.findByIdAndUpdate(req.params.id, req.body)
    console.log(updateCharacter)

    res.json(updateCharacter)
})

router.delete('/:id', async (req,res) => {
    const deleteCharacter = await Character.findByIdAndDelete(req.params.id)
    res.json(deleteCharacter)
})
module.exports = router