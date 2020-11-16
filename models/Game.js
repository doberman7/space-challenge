const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    score: {
        type: Number,
        default: 0
    },
    seconds: Number,
    
}, {
    timestamps: true
})


module.exports = model("Game", userSchema)
