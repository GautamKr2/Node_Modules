const colors = require('colors')
const http = require('http')

const arg = process.argv
console.log("Argument passed are -", arg)
console.log("First argument is -", colors.blue(arg[2]))


let port = arg[2]
http.createServer((req, resp) => {
    resp.write("Command line input")
    resp.end()
}).listen(port)