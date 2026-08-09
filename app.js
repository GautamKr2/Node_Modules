// Importing module
let data = require('./data');
console.log(data);
console.log("From M-1", data.userName);

// Importing module(M-2)
let {userName} = require('./data');
console.log("From M-2", userName);



// Simple checking
// console.log(20+20)


// Creating a file from fs module and also write something inside it
var fsa = require("fs");
fsa.writeFileSync("sample.txt", "My name is Gautam Kushwaha.");

function printSomething(str) {
    console.log("Passes string =", str);
}

printSomething("Gautam Kushwaha");
