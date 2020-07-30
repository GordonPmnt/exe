const express = require('express');
const app = express();
const mailer = require('./mailer/mailer')
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use('/', mailer)

// Middleware
app.use((req, res, next) => { 
    console.log('ON: ', req.headers.host, req.url);
    next();
});

module.exports = app;