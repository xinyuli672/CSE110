var fs = require('fs');
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
var pathdir = process.argv[2]; 

fs.readdir(pathdir, function(err, list) {
    //console.log(list);
    for (var i=0; i<list.length; i++) {
        var path = require('path');
        if(path.extname(list[i]) === '.js'){
            console.log(list[i]);
        }
        
    }
});