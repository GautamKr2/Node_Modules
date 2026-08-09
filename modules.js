const {log, warn} = require('console');
log("Custom log");
warn("Custom warn");

// Importing fs module i.e. File System
// var fsa = require("fs");
// fsa.writeFileSync("sample.txt", "My name is Gautam Kushwaha.");

// Importing OS Module
const os = require('os');
console.log(os.platform());
console.log(os.hostname());
// console.log(os.cpus());


console.log(process.cwd());
console.log(process.pid);