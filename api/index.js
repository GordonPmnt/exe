const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');

const auth2Config = require('./config');

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    auth2Config.CLIENT_ID,
    auth2Config.CLIENT_SECRET,
    auth2Config.REDIRECT_URL
);

oauth2Client.setCredentials({
    refresh_token: auth2Config.TOKEN.refresh_token
});
const accessToken = oauth2Client.getAccessToken()

const transport = {
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: auth2Config.USER, 
        clientId: auth2Config.CLIENT_ID,
        clientSecret: auth2Config.CLIENT_SECRET,
        refreshToken: auth2Config.TOKEN.refresh_token,
        accessToken: accessToken
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
    const { name, email, message } = req.body
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mail = {
        from: name,
        to: 'gordon.preumont@exe-solutions.com',
        subject: `New Message from ${name}`,
        text: content
    }
    console.log('pouet')
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err)
            res.json({
                status: 'fail'
            })
        } else {
            console.log(data)
            res.json({
                status: 'success'
            })
        }
    })
})

app.use(cors())
app.use(express.json())
app.use('/', router)

// Middleware
app.use((req, res, next) => { 
    console.log('ON: ', req.headers.host, req.url);
    next();
});
app.listen(3002, () => {
    console.log(`Server Listening on port 3002`)
});