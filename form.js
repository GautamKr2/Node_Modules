// const http = require('http')

// http.createServer((req, resp) => {
//     resp.writeHead(200, {'content-type': 'text/html'})
//     if(req.url == '/') {
//         resp.write(`
//             <form action="/submit" method="post">
//                 <input type="text" placeholder="Enter name" /> <br/><br/>
//                 <input type="text" placeholder="Enter email" /> <br/><br/>
//                 <button> Submit </button>
//             <form/>
//         `)
//     }
//     else if(req.url == '/submit') {
//         resp.write('<h1> Data submitted </h1>')
//     }
//     resp.end()
// }).listen(3200)



const http = require('http')
const fs = require('fs')

http.createServer((req, resp) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {
        if(err) {
            resp.writeHead(500, {'content-type': 'text/plain'})
            resp.write('Internal Server Error')
            resp.end()
            return
        }
        resp.writeHead(200, {'content-type': 'text/html'})
        if(req.url == '/') {
            resp.write(data)
        }
        else if(req.url == '/submit') {
            resp.write('<h1> Data Submimtted </h1>')
        }
        resp.end()
    })
}).listen(3200)