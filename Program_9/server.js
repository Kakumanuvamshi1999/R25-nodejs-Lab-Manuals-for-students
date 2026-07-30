// Step 1: Import required modules

const http = require('http');
const os = require('os');
const path = require('path');
const { EventEmitter } = require('events');

// Step 2: Create an instance of EventEmitter

const eventEmitter = new EventEmitter();

// Step 3: Create a simple HTTP server

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Step 4: Define server port and hostname

const port = 3000;
const hostname = '127.0.0.1';

// Step 5: Listen for requests on the specified port and hostname

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Step 6: Print OS information

console.log('OS Type:', os.type());
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);

// Step 7: Print current working directory

console.log('Current Working Directory:', process.cwd());

// Step 8: Join paths using the path module

const joinedPath = path.join(__dirname, 'public', 'images');
console.log('Joined Path:', joinedPath);

// Step 9: Handle a custom event

eventEmitter.on('customEvent', (data) => {
    console.log('Custom Event Triggered:', data);
});

// Step 10: Emit a custom event

eventEmitter.emit('customEvent', { message: 'Hello from custom event!' });