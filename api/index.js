const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const http = require('http');
const creds = require('./config');
const app = require('./app')

const server = http.createServer(app);

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        type: 'OAuth2',
        user: creds.USER,
        pass: creds.PASS,
        accessToken: creds.TOKEN
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: name,
        to: 'gordon.preumont@exe-solutions.com',
        subject: `New Message from ${name}`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

server.listen(3002, () => {
    console.log(`Server Listening on port 3002`)
});