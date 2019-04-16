const fs = require('fs');
const path = require('path');
module.exports = (app, Express) => {
    //...
    app.use('/static', Express.static('./views'));
}
