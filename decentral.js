function getRootChunk(path) {
    return require('chunks/' + path)
}

function load(url, callback) {
    var components = url.split('/'),
        root_chunk = require('chunks/root');
        chunk = getChunk(root, components);
    
    callback(
        {
            template: 'content',
            content: components.toString()
        }
    );
}

exports.load = load;