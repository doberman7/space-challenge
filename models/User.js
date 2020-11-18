const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    name: String,
    picture: { type: String, default: 'https://memegenerator.net/img/instances/67438689/oh-great-im-a-profile-photo.jpg' },
    challengesCreated: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }]

}, {
    timestamps: true
})


module.exports = model("User", userSchema)
