const {Router} = require('express');
const {createChallenge,readAllChallenges,updateChallenge} = require('../controllers/challengeControllers');
const router = Router()

router.post('/create',createChallenge)

router.get('/readAll',readAllChallenges)

router.get('/update')
router.post('/update',updateChallenge)

module.exports = router
