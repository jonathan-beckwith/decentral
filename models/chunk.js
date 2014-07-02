var Chunk = (function () {
    function Chunk(options) {
        this.url = options.url;
        this.name = options.name;
        this.content = options.content;
        this.title = options.title;
        this.chunks = [];
    }
    Chunk.prototype.update = function() {
        
    }
    return Chunk;
}());

exports.Chunk = Chunk;