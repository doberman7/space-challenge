const {
  Router
} = require('express');
const {
  indexView,
  signupViewUser,
  loginView,
  profilePicture,
  profileView,
  loginProcess,
  signupProcessUser,
  logout,
  editProfile
} = require('../controllers/authControllers');
const uploadPicture = require('../config/cloudinary')

const router = Router()
router.get('/', indexView)
router.get('/signup-user', signupViewUser);
router.post('/signup-user', signupProcessUser)

router.get('/login', loginView)
router.post('/login', loginProcess)
router.get('/profile', profileView)
router.post('/profile-picture', uploadPicture.single('image'), profilePicture)
router.get('/logout', logout)
router.post('/editProfile',editProfile)

module.exports = router;
