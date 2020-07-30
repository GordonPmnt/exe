const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_URL, 
    { 
        // fix deprecation warnings (cfr doc)
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false,
        keepAlive: true,
    })
    .then(() => console.log(`MongoDB ${process.env.DB_URL} connected...`))
    .catch(err => console.log(err));

module.exports = { mongoose };