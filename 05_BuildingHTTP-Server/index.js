const http = require("http");
const fs = require('fs');
const { error } = require("console");

const myServer = http.createServer((request, response) => {
    const logEntry = `${Date.now()} :: ${request.url} :: New REQUEST received\n`;
    fs.appendFile('log.txt', logEntry, (error, data) => {
        /*     if(!error){
                response.end("Logged in the details :) ")
            } */
        switch (request.url) {
            case "/":
                response.end("Home Page");
                break;
            case "/contact":
                response.end("Call me : +91-4802326836");
                break;
            case "/about":
                response.end("Hi!, I'm Yashwanth B M  :) ");
                break;
        
            default:
                response.end("404 :: Page not Found :( ")
                break;
        }

    });
});

myServer.listen('5500', () => (console.log("Server Started...")));