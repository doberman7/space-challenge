const {Router} = require('express');
const {createChallenge,readAllChallenges,updateChallenge,viewChallenge} = require('../controllers/challengeControllers');
const router = Router()

router.post('/create',createChallenge)

router.get('/readAll',readAllChallenges)

router.get('/edit/:id',viewChallenge)
router.post('/update/:id',updateChallenge)

module.exports = router
