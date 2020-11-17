const Game = require('../models/Game')


exports.ViewCreateGame = (req, res) => res.render('games/game')
exports.CreateGame = async(req, res) => {
    console.log(req.body);
    const { score, time} = req.body
    await Game.create({ score, time})
    res.render('games/game')
}
