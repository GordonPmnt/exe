const express = require('express');
const router = express.Router();
require('dotenv').config()
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URI
);

oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()

const transport = {
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER, 
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
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
    const { name, email, company, phone, message } = req.body
    const content = ` name: ${name} \n email: ${email} \n phone: ${phone} \n company: ${company} \n \n${message}`

    const mail = {
        from: name,
        to: 'gordon.preumont@exe-solutions.com',
        subject: `eXe : New Message from ${name}`,
        text: content
    }
    
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

module.exports = router;