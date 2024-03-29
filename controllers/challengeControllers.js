const Challenge = require('../models/Challenge.Model')
const User = require('../models/User')
const { emailSendChallenge} = require('../config/nodemailer')

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

    let newChallenge = await Challenge.create({
      idChallenger: user,
      userChallenged: email,
      time: time,
      score: score,
      userCreator: user,
    })
    const userToUpdated = await User.findByIdAndUpdate(user,{$push:{challengesCreated:newChallenge}},{new:true})
    // await userToUpdated.challengesCreated.push(newChallenge)
    // await console.log(userToUpdated,newChallenge);
    //encontrar los challenges del usuario en cuestion
    const challenges = await Challenge.find({ idChallenger: user }).populate("userCreator")
    //si el challenge puede ser creado
    // return res.render('challenges/challengeList', {
    return res.render('games/game', {
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

exports.viewChallenge = async (req, res) => {

    try {
      const idChallenge = req.params.id
      const challenge = await Challenge.findById(idChallenge)
      res.render('challenges/edit',{challenge})
    } catch (e) {
      console.error(e);

    } finally {

    }
}

exports.updateChallenge = async (req, res) => {
  const {score, email,time,hasBeenBeated} = req.body
  const id = req.session.passport.user
  const user = await User.findById(id)
  const idChallenge = req.params.id
  const challengeUpdated = await Challenge.findByIdAndUpdate(
    //DONT UPDATE EMAIL
    idChallenge, {   time,  score, userChallenged:email,hasBeenBeated },{new:true})
  //mostrar challenges
  const challenges = await Challenge.find({ idChallenger: user }).populate("userCreator")
  res.render('challenges/challengeList',{challenges})
}

exports.deleteChallenge = async (req, res) => {
  const idUser = req.session.passport.user
  const user = await User.findById(idUser)
  const idChallenge = req.params.id
  const challengeToDelete = await Challenge.deleteOne({ idChallenge });
  //mostrar challenges
  const challenges = await Challenge.find({ idChallenger: user }).populate("userCreator")
  res.render('challenges/challengeList',{challenges})
}

exports.sendChallengeEmil = async (req, res)=>{
  const idUser = req.session.passport.user
  const user = await User.findById(idUser)
  const idChallenge = req.params.id
  try {
    const challenge = await Challenge.findById(idChallenge)
    //send mail
    await emailSendChallenge(challenge.userChallenged, challenge)
    //mostrar challenges
    const challenges = await Challenge.find({ idChallenger: user }).populate("userCreator")
    res.render('challenges/challengeList',{challenges,infoFlash:"Challenge send"})

  } catch (e) {
    console.log(e);
  } 
}
