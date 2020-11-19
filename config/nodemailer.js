const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  service: 'hotmail.com',
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASS
  }
})

exports.emailRegistro = (email, name) => {
  return transporter.sendMail({
    from: 'spacechallenge@hotmail.com',
    to: email,
    subject: 'Welcome to challenge Space',
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style>
          .title{
            color: gray;
            font-weight: bold
          }

          </style>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
        </head>
        <body>
        <h1 class="title">Hi ${name} Welcome to challenge Space</h1>
        <p > the hardest challenge ever </p>
        </body>
        </html>
    `
  })
}

exports.emailSendChallenge = (email, challenge) => {
  return transporter.sendMail({
    from: 'spacechallenge@hotmail.com',
    to: email,
    subject: 'You have recibe a challenge Space',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
        .title{
          color: red;
          font-weight: bold
        }

        </style>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
      </head>
      <body>
      <h1 class="title">Hi you have recibed a challenge</h1>
      <p class="title">
        The challenge is beat the score of ${challenge.score} under ${challenge.time} seconds
      </p>
      <p>Proof you can beat the challenge signin up on Space challenge at</p>
      <a href="https://space-demons3.herokuapp.com/">Space Challenge</a>

      </body>
      </html>
  `
  })
}
