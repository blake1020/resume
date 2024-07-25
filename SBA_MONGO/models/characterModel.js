const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    godlyParent: {
      type:  Array,
    required: true,
    },
    seriesAppearedIn:{
      type:  Array,
    required: true
    
    }
})

const Character = mongoose.model('Character', CharacterSchema )

module.exports = Character;