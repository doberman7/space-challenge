const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    score: {
        type: Number,
        default: 0
    },
    time: Number,
    
}, {
    timestamps: true
})


module.exports = model("Game", userSchema)
