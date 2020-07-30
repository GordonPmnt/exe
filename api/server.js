var http = require('http')
const app = require('./app');
require('dotenv').config()

const server = http.createServer(app);

server.listen(process.env.PORT, (err) => {
    if (err) {
      throw new Error("Server couldn't launch");
    }
    console.log(`Server is listening on ${process.env.PORT}`);
});