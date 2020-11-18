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
    //si el challenge puede ser creado
    return res.render('challenges/challengeList',{infoFlash: "challenge Created"})
  } else {

    return res.render('games/game', {infoFlash: "challenge NOT created, missing info"})

  }

}


exports.readAllChallenges = async(req,res)=>{
  console.log(req.session);
  // Challenge.find({
  //   email
  // });

}


exports.updateChallenge = async(req,res)=>{

}

exports.deleteChallenge = async(req,res)=>{

}
