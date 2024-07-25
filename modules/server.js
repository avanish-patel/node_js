const http = require("http");
const dateTime = require("./dateModule");


http.createServer((req,res) => {

    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(`<h1>The date and time are currently: ${dateTime.getDateTime()}<h1>`);
    res.end();
}).listen(3000);