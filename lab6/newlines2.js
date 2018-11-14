var fs = require('fs')
var count = undefined

function countlines(callback) {
fs.readFile('foo.txt', function doneReading(err, fileContents) {
// inside the callback, after we finish reading the file
count = fileContents.toString();
count = count.split('\n');
callback()
})
}
function logcount(){
    console.log(count.length)

}
countlines(logcount);

