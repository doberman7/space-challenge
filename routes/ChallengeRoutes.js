const {Router} = require('express');
const {createChallenge,readAllChallenges} = require('../controllers/challengeControllers');
const router = Router()

// console.log(createChallenge);
router.post('/create',createChallenge)
// router.get('/create',createChallenge)

router.get('/create',readAllChallenges)



module.exports = router
