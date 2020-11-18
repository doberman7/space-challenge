const Challenge = require('../models/Challenge.Model')


exports.createChallenge = async(req, res) => {
    let {user} = req.session.passport
    let {time,email,score} = req.body
    if (time != "" && email != "" && user != "" && score != "" ) {
      console.log("DATA:",time,email,user);

    Challenge.create({
      idChallenger: user,
      userChallenged: email,
      time: time,
      score: score,
      hasBeenBeated: false
    })
    .then(()=>{
      console.log("CREATION SUCCESFULL")
    }).catch(err=>{
      console.log("DURING CREATION:",err);
    })
    res.render('games/game',{infoFlash: "challenge Created"})
  }
  res.render('games/game')
}
