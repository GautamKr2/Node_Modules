const queryString = require('querystring')

function userDataSubmit(req, resp) {
    resp.write(`
        <h1> Data Submitted </h1>
    `)

    let dataBody = [];
    req.on('data', (chunk) => {
        dataBody.push(chunk)
    })

    req.on('end', () => {
        let rawData = Buffer.concat(dataBody).toString()
        let readableData = queryString.parse(rawData)
        console.log(readableData)
    })
}

module.exports = userDataSubmit;