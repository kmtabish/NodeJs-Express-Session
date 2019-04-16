const fs = require('fs');
const path = require('path');
module.exports = (app) => {
    //...
    app.get('/', (req, res) => {
            // maybe test for existence here using fs.stat
            res.writeHead(200, {"Content-Type": "text/html"});
            fs
                .createReadStream(path.resolve('./views', 'index.html'))
                .pipe(res);
        });
}
