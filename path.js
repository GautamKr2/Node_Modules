const path = require('path')
const file = "text/abc.txt"

console.log(path.extname(file))  // Extention of the file
console.log(path.dirname(file))  // Name of the directory
console.log(path.basename(file))  // Name of file with its extension

console.log(path.resolve("text", "abc.txt"))  // Give the full path of the file
console.log(path.isAbsolute(file))  // File is absolute or not
console.log(path.isAbsolute("E:/NODE_FILE/"+file))


// Path Global constant
console.log(__dirname)  // Will give path of file from start to end
console.log(__filename)  // Will give path of file from start to end with its name also