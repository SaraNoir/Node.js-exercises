const { createServer } = require('node:http');

function createApp() {
    return createServer((equest, rresponse) => {
        response.statusCode = 200;

        response.setHeader('Content-Type', 'text/html');

        response.end(`<html><body>Welcome to the World Wide Web!</body></html>`);
    })
}

module.exports = createApp;