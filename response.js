const http = require("http");

const age = 22;

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h2>This is a simple h1 tag</h2>");

    resp.write(`
        <html>
        <head>
            <title>Server Response</title>
        </head>
        <body>
            <h3>This is a simple h3 tag.</h3>
            <h2>Age is `+age+`</h2>
            <h2>Real date is `+new Date()+`</h2>
        </body>
        </html>
        `)
    resp.end();
    process.exit();
}).listen(1600);