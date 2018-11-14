var fs = require('fs');
var buf = fs.readFileSync('foo.txt');
var str = buf.toString();
str = str.split('\n');
console.log(str.length);
