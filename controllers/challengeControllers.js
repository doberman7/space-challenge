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

  if (typeof time == String || typeof score == String) {
    return res.render('games/game', {
      infoFlash: "challenge NOT created, use numbers"
    })
  }



    await Challenge.create({
      idChallenger: user,
      userChallenged: email,
      time: time,
      score: score,
      hasBeenBeated: false
    })

    const challenges = await Challenge.find()
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
  // Challenge.find({
  //   email
  // });

}


exports.updateChallenge = async (req, res) => {

}

exports.deleteChallenge = async (req, res) => {

}
