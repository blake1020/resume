const mongoose = require('mongoose')

const MythicalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    species: {
      type:  String,
    required: true,
    },
    description:{
      type:  String,
    required: true
    
    }
})

const Mythical = mongoose.model('Mythical', MythicalSchema )

module.exports = Mythical;