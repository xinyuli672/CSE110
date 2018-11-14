var fs = require('fs');
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
var filterFcn = require('./filter');
var pathdir = process.argv[2]; 

let i = 0
function printfilename(file){
    i++;
    console.log(i + ': ' + file)
}

fs.readdir(pathdir, function(err, list) {
    for (var i=0; i<list.length; i++) {
        filterFcn(list[i],printfilename)
    }
});