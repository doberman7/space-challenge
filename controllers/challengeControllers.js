const Challenge = require('../models/Challenge.Model')


exports.createChallenge = async(req, res) => {
    let {user} = req.session.passport
    let {time,email} = req.body
    if (time != "" && email != "" && user != "" ) {
      console.log("DATA:",time,email,user);
      {infoFlash: "challenge Created"}
    }
    // User.create({
    //   email,
    //   password: hashPass,
    //   name
    // })
    // //esto es de nodemailer
    // .then(()=>{
    //   emailRegistro(email, name)
    //   res.render('auth/login',{infoFlash: "Welcome"})
    // }).catch(err=>{console.log(err);})
    res.render('games/game')
}
