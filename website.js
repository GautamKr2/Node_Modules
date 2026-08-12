const http = require('http')
const fs = require('fs')

http.createServer((req, resp) => {
    let collectHeader = fs.readFileSync('html/header.html', 'utf-8')

    let file = "/home";
    if(req.url != "/") {
        file = req.url;
    }
    console.log(file)
    if(req.url != '/style.css') {
        let data = fs.readFileSync("html"+file+".html", 'utf-8')
        resp.writeHead(200, {'content-type': 'text/html'})
        resp.write(collectHeader + data)
    }
    else if(req.url == '/style.css') {
        let data = fs.readFileSync('html/style.css', 'utf-8')
        resp.writeHead(200, {'content-type': 'text/css'})
        resp.end(data)
    }
    resp.end()
}).listen(3200)