const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'hotmail.com',
    auth: {
        user: process.env.NODEMAILER_MAIL,
        pass: process.env.NODEMAILER_PASS
    }
})

exports.emailRegistro = (email, name) => {
    return transporter.sendMail({
        from: 'ivanrubioangeles@hotmail.com',
        to: email,
        subject: 'Bienvenido a space Demons 3',
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
        <h1 class="title">Hi ${name} Welcome to space Demons 3</h1>
        <p > the hardest game ever </p>
        </body>
        </html>
    `
    })
}

exports.emailReseña = (name, email, restaurantName) => {
    return transporter.sendMail({
        from: 'Hackerman',
        to: email,
        subject: 'reseña',
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
      <h1 class="title">Hola ${name} tu restaurante ${restaurantName} recibió una nueva reseña</h1>
      </body>
      </html>
  `
    })
}
