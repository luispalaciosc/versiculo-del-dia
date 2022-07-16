const http = require('http');
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log('server recibe request');
    res.send("Hello World");
};

const server = http.createServer(handler);