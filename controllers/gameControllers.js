const Game = require('../models/Game')


exports.ViewCreateGame = (req, res) => res.render('games/game')
exports.CreateGame = async(req, res) => {
    
    res.render('games/game')
}
