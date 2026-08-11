const http = require('http')
const fs = require('fs')

http.createServer((req, resp) => {
    if(req.url == '/') {
        let data = fs.readFileSync('html/home.html', 'utf-8')
        resp.writeHead(200, {'content-type': 'text/html'})
        resp.write(data)
    }
    else if(req.url == '/style.css') {
        let data = fs.readFileSync('html/style.css', 'utf-8')
        resp.writeHead(200, {'content-type': 'text/css'})
        resp.write(data)
    }
    resp.end()
}).listen(3200)