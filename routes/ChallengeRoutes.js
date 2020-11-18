const {  Router} = require('express');
const {createChallenge} = require('../controllers/challengeControllers');
const router = Router()
// const {
//   Router
// } = require('express');
console.log(createChallenge);
router.post('/create',createChallenge)
// router.get('/create',createChallenge)

module.exports = router
