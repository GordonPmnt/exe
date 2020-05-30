const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use('/', router)

// Middleware
app.use((req, res, next) => { 
    console.log('ON: ', req.headers.host, req.url);
    next();
});

module.exports = app