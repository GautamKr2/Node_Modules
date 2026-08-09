const http = require("http");
http.createServer((request, response) => {
    response.write("<h1>Hii everyone! This is Gautam Kumar.</h1> <p>Good morning</p>");
    response.write("<h2>Hii everyone! This is Gautam Kumar.</h2>");
    response.end();
}).listen(2400);