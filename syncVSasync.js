// JavaScript
// Synchronous method
/*
console.log('apple1')
console.log('apple2')
console.log('apple3')
*/

// Asynchronous method
/*
console.log('apple1')
setTimeout(() => {
    console.log('apple2')
}, 1000);
console.log('apple3')
*/


// Node
// Synchronous mehod
/*
const fs = require('fs')
let data = fs.readFileSync('text/abc.txt', 'utf-8')
console.log(data)
console.log('File reading completed')
*/

// Asynchronous method
const fs = require('fs')
fs.readFile('text/abc.txt', 'utf-8', (err, data) => {
    if(err) {
        return false;
    }
    console.log(data)
})
console.log('data read')