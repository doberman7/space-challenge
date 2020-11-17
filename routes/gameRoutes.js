const {ViewCreateGame,CreateGame} = require('../controllers/gameControllers');
const {  Router} = require('express');
const router = Router()

router.get('/create',ViewCreateGame)
router.post('/create',CreateGame)
//sin esto, el require obtiene un objeto y no una función
module.exports = router
