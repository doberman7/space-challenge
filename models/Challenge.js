const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  idChallenger: type: Schema.Types.ObjectId,
  idChallenged: type: Schema.Types.ObjectId,
  seconds: Number,
  score: Number,
  hasBeenBeated: Boolean

}, {
    timestamps: true
})


module.exports = model("Challenge", userSchema)
