const http = require('http')

const userData = [
    {
        'name': 'Gautam',
        'add': 'khushalpur',
        'mob': 248895
    },
    {
        'name': 'Saurav',
        'add': 'khushalpur',
        'mob': 895894
    },
    {
        'name': 'Bablu',
        'add': 'khushalpur',
        'mob': 547893
    }
]

http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'application/JSON')
    resp.write(JSON.stringify(userData))
    resp.end()
}).listen(4100)