const Challenge = require('../models/Challenge.Model')
const User = require('../models/User')


exports.createChallenge = async (req, res) => {
  let {
    user
  } = req.session.passport
  let {
    time,
    email,
    score
  } = req.body
  //si formularios no vacios
  if (
    time != "" &&
    email != "" &&
    score != ""
  ) {

    await Challenge.create({
      idChallenger: user,
      userChallenged: email,
      time: time,
      score: score,
      hasBeenBeated: false,
      userCreator: user,
    })
    //encontrar los challenges del usuario en cuestion
    const challenges = await Challenge.find({ idChallenger: user }).populate("userCreator")
    //si el challenge puede ser creado
    return res.render('challenges/challengeList', {
      infoFlash: "challenge Created",
      challenges: challenges
    })

  } else {
    return res.render('games/game', {
      infoFlash: "challenge NOT created, missing info"
    })
  }

}

exports.readAllChallenges = async (req, res) => {
  const id = req.session.passport.user
  const user = await User.findById(id)

  const challenges = await Challenge.find({ idChallenger: user }).populate("userCreator")

  res.render('challenges/challengeList', {challenges:challenges})

}


exports.updateChallenge = async (req, res) => {
  const {score, email,time} = req.body
  const id = req.session.passport.user
  const user = await User.findById(id)
  const challengeUpdated = await Challenge.findByIdAndUpdate(id, { $set: { time: time, score: score, email: email }},()=>{
    console.log("k");
  })
}

exports.deleteChallenge = async (req, res) => {

}
