const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  idChallenger: Schema.Types.ObjectId,
  idChallenged: Schema.Types.ObjectId,
  time: Number,
  score: Number,
  hasBeenBeated: Boolean

}, {
    timestamps: true
})


module.exports = model("Challenge", userSchema)
