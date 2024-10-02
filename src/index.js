const http = require('http');
http.createServer((_, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify({ name: "@FoXDev-404", email: "foxdev_404@gmail.com" }));
    res.end();
}).listen(4040);