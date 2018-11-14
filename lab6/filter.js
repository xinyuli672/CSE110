module.exports = function filter (pathToDir, callback){
    var path = require('path');
    if(path.extname( pathToDir) === '.js'){
        callback(pathToDir)
    }
};