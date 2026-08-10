const fs = require('fs')
// Create
// fs.writeFileSync("text/apple.txt", "This is a fruit.")
// fs.writeFileSync("text/banana.txt", "This is a fruit.")

// Read
// const data = fs.readFileSync('text/apple.txt', 'utf-8')
// console.log(data)

// Update
// fs.appendFileSync("text/apple.txt", " And it is good for health.")

// Delete
// fs.unlinkSync("text/banana.txt")



// Operation given by user as well as content
const arg = process.argv
let operation = arg[2];
let name = arg[3]
if(operation == 'write') {
    let content = arg[4]
    fs.writeFileSync('text/'+name+'.txt', content)
}
else if(operation == 'read') {
    let data = fs.readFileSync('text/'+name+'.txt', 'utf-8')
    console.log(data)
}
else if(operation == 'update') {
    let content = arg[4]
    fs.appendFileSync('text/'+name+'.txt', content)
}
else if(operation == 'delete') {
    fs.unlinkSync('text/'+name+'.txt')
}