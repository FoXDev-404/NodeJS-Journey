const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hello There!</h1>");
    res.end();
}).listen(8080);

