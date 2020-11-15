const { Router } = require('express');
const { indexView , signupViewUser} = require('../controllers/authControllers');
const uploadPicture = require('../config/ cloudinary')

const router = Router()
router.get('/', indexView)
router.get('/signup-user', signupViewUser);
// router.get('/signup-restaurant', signupViewRestaurant)
// router.post('/signup', signupProcessComensal)
// router.post('/signup-restaurant', signupProcessRestaurant)
// router.get('/login', loginView)
// router.post('/login', loginProcess)
// router.get('/profile', profileView)
// router.post('/profile-picture', uploadPicture.single('image'), profilePicture)
module.exports = router;
