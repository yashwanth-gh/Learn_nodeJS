const http = require("http");
const fs = require("fs");
const url  =require("url");
const { error } = require("console");

const myServer = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") return response.end();

  const myUrl = url.parse(request.url,true);
  console.log(myUrl);
  const logEntry = `${Date.now()} :: ${request.url} :: New REQUEST received\n`;

  fs.appendFile("log.txt", logEntry, (error, data) => {
    switch (myUrl.pathname) {
      case "/":
        response.end("Home Page");
        break;

      case "/contact":
        response.end("Call me : +91-4802326836");
        break;

      case "/about":
        const queryName = myUrl.query.name;
        const queryUSN = myUrl.query.usnid;
        response.end(`Hi!, ${queryName} !
         You're USN is ${queryUSN}`);
        break;

      default:
        response.end("404 :: Page not Found :( ");
        break;
    }
  });
});

myServer.listen("5500", () => console.log("Server Started..."));
