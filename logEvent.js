const http = require('http');
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const path = require('path');

// Event handling setup
const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();

// Log event handling function
const logEvent = (message) => {
    const logDirectory = './EventLog';
    const logFile = path.join(logDirectory, 'log.txt');

    try {
        // Check if the directory exists, create it if it doesn't
        if (!fs.existsSync(logDirectory)) {
            fs.mkdirSync(logDirectory, { recursive: true });
            console.log(`Directory ${logDirectory} created.`);
        }

        // Append the log entry to the file
        const logMessage = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}\t${uuid()}\t${message}\n`;
        fs.appendFile(logFile, logMessage, (err) => {
            if (err) throw err;
            console.log('The log has been saved!');
        });
    } catch (err) {
        console.error('Error writing to log file:', err);
    }
};

// Initialize HTTP server
const PORT = process.env.PORT || 4444;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    const extension = path.extname(req.url);
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Server is running!</h1>'); // Basic response for testing
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    myEmitter.emit('log', 'Server started');
});

// Register log event listener
    myEmitter.on('log', logEvent);

// Example of emitting a log event
myEmitter.emit('log', 'Hello World!');
