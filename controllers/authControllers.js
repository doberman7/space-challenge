const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../config/passport')
const {
  emailRegistro
} = require('../config/nodemailer')

exports.indexView = (req, res) => res.render('index')
exports.signupViewUser = (req, res) => res.render('auth/signupUser')
// exports.signupViewRestaurant = (req, res) => res.render('auth/signupRestaurant')


//signUp asyn Await
// exports.signupProcessUser = async (req, res) => {
//   const {
//     email,
//     password,
//     name
//   } = req.body
//   if (!email || !password) {
//     return res.render('auth/signupUser', {
//       errorMessage: 'Please fill email and password '
//     })
//   }
//   const user = await User.findOne({
//     email
//   })
//   if (user) {
//     return res.render('auth/signupUser', {
//       errorMessage: 'user already exists'
//     })
//   }
//   const salt = bcrypt.genSaltSync(12)
//   const hashPass = bcrypt.hashSync(password, salt)
//   await User.create({
//     email,
//     password: hashPass,
//     name
//   })
//   //esto es de nodemailer
//   await emailRegistro(email, name)
//   res.redirect('/login')
// }

exports.signupProcessUser = async (req, res) => {
  const {
    email,
    password,
    name
  } = req.body
  if (!email || !password) {
    return res.render('auth/signupUser', {
      errorMessage: 'Please fill email and password '
    })
  }
  const user = await User.findOne({
    email
  })
  if (user) {
    return res.render('auth/signupUser', {
      errorMessage: 'user already exists'
    })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  await User.create({
    email,
    password: hashPass,
    name
  })
  //esto es de nodemailer
  .then(()=>{
    emailRegistro(email, name)
    res.redirect('/login')
  }).catch(err=>{console.log(err);})
}

// exports.loginView = (req, res) => res.render('auth/login')
exports.loginView = (req, res) => {
  res.render("auth/login", { "errorMessage": req.flash("error") });
}
// exports.loginView = (req, res) => { res.render("auth/login",  {
//    error: req.flash("error")
//  })}

exports.loginProcess = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
})

exports.logout = (req, res) => {
  req.logout(); //NOt working
  req.session.destroy();
  res.redirect('/');
}

exports.profileView = async (req, res) => {
  try {
    const id = req.session.passport.user
    const user = await User.findById(id)
    res.render('profile', user)
  } catch (e) {
    console.error(e);
    res.render('index', {
      errorMessage: 'Please fill email and password '
    });
  } finally {
    console.log('We do cleanup here');
  }

}

// exports.profilePicture = async (req, res) => {
//   const id = req.session.passport.user
//   const picture = req.file.path
//   await User.findByIdAndUpdate(id, {
//     picture
//   }, {
//     new: true
//   })
//   res.redirect('profile')
// }

exports.profilePicture = (req, res) => {
  const id = req.session.passport.user
  const picture = req.file.path
  User.findByIdAndUpdate(id, {
      picture
    }, {
      new: true
    })
    .then(() => {
      res.redirect('profile')
    })
    .catch(
      res.redirect('profile')
    );
}
