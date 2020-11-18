const Challenge = require('../models/Challenge.Model')


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
    await console.log(challenges);
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
  console.log(req.session);

}


exports.updateChallenge = async (req, res) => {

}

exports.deleteChallenge = async (req, res) => {

}
