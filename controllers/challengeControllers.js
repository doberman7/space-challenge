const Challenge = require('../models/Challenge.Model')


exports.createChallenge = async(req, res) => {
    let {user} = req.session.passport
    // console.log(req.session);

    // const { score, time} = req.body
    // await Game.create({ score, time})
    res.render('games/game',{infoFlash: "challenge Created"})
}
