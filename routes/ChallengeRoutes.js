const {Router} = require('express');
const {createChallenge,readAllChallenges} = require('../controllers/challengeControllers');
const router = Router()

router.post('/create',createChallenge)

router.get('/readAll',readAllChallenges)



module.exports = router
