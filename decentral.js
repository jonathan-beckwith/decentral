var fs = require("fs"),
    express = require("express"),
    app = express();

app.get('/worldnews', function (req, res) {
    res.send('Hello World');
});

server = app.listen(3000, function () {
        console.log('Listening on port %d', server.address().port);
})