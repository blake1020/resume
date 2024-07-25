const express = require('express')
const router = express.Router();
const Mythical = require('../models/mythicalModel')


router.get('/', async (req,res) => {
    const allTheMythical = await Mythical.find({})
    res.json(allTheMythical)
})

//individual mthyical
router.get('/:id', async (req,res) => {
    console.log(req.params.id)
    try {
        const oneMythical = await Mythical.findById(req.params.id)
        res.json(oneMythical) 
    } catch (error) {
        //res.statusCode(500).json({msg: "Something went wrong"})
        console.log("error geting individual mythical creature")
    }
})

//Create new mythical creature
router.post('/', async (req, res) => {
    console.log(req.body)    
    const createMythical = await Mythical.create(req.body)
        
        res.json(createMythical)
    
} )

//Update - Patch
router.patch('/:id', async (req,res) => {
    const updateMythical = await Mythical.findByIdAndUpdate(req.params.id, req.body)
    console.log(updateMythical)

    res.json(updateMythical)
})

router.delete('/:id', async (req,res) => {
    const deleteMythical = await Mythical.findByIdAndDelete(req.params.id)
    res.json(deleteMythical)
})
module.exports = router