
module.exports = (app, Express) => {
    //...
    app.use('/static', Express.static('./views'));
    app.use('/static/in2', Express.static('./views/index2.html'));
}
