const {Router} = require('express');
const {createChallenge,readAllChallenges,updateChallenge,viewChallenge} = require('../controllers/challengeControllers');
const router = Router()

router.post('/create',createChallenge)

router.get('/readAll',readAllChallenges)

router.post('/edit',viewChallenge)

module.exports = router
