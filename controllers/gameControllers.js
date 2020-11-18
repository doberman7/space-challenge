const Game = require('../models/Game')


exports.ViewCreateGame = (req, res) => res.render('games/game')
exports.CreateGame = async(req, res) => {
    let {user} = req.session.passport
    console.log(user);

    // const { score, time} = req.body
    // await Game.create({ score, time})
    res.render('games/game')
}
