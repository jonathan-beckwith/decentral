var fs = require("fs");

function getChunk(path) {
    return require('./chunks/' + path)
}

function saveChunk(chunk) {
    fs.writeFile('chunks/' + chunk.path, JSON.stringify(chunk));
}

function load(url, callback) {
    var components = url.split('/'),
        chunk = getChunk(url);
    
    callback(
        {
            template: chunk.template || 'json',
            chunk: chunk
        }
    );
}

exports.load = load;