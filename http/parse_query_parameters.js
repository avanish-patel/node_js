const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    //parse year and month from this url: http://localhost:8080/?year=2020&month=July
    const q = url.parse(req.url, true).query;
    res.write(`Year : ${q.year}, Month: ${q.month}`);
    res.end();
}).listen(8080);