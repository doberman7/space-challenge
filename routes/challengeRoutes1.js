const {Router} = require('express');
const {createChallenge,readAllChallenges,updateChallenge,viewChallenge,deleteChallenge,sendChallengeEmil} = require('../controllers/challengeControllers');
const router = Router()

router.post('/create',createChallenge)

router.get('/readAll',readAllChallenges)

router.get('/edit/:id',viewChallenge)
router.post('/update/:id',updateChallenge)

router.get('/delete',deleteChallenge)

router.get('/sendChallenge/:id',sendChallengeEmil)

module.exports = router
