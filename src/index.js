const http = require('http');

http.createServer((_, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify([
        { name: "@FoXDev-404", email: "foxdev_404@gmail.com" },
        { name: "Rajpal Nishad", email: "rajpal.nishad@gmail.com" },
        { name: "Nikhil Pratap Singh", email: "nikhil.p.s@gmail.com" },
        { name: "@Unkn0wn", email: "unkn0wn.worrior@gamil.com" }
    ]));
    res.end();
}).listen(4040);