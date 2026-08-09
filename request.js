const http = require('http')

const server = http.createServer((req, resp) => {
    // console.log(req)
    console.log(req.url)
    // console.log(req.headers)
    console.log(req.headers.host)

    resp.setHeader('Content-Type', 'text/html')
    resp.write('<h1>Request type</h1>')

    if(req.url == '/') {
        resp.write('<h2>Home Page</h2>')
        let {userName} = require('./data');
        resp.write(`<h3>From other file <b>${userName}</b></h3>`);
    }
    else if(req.url == '/login') {
        resp.write('<h2>Login Page</h2>')
    }
    else {
        resp.write('<h2>Other Page</h2>')
    }

    resp.end()
})

server.listen(4200)