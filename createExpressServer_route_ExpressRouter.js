"use strict";
//Step1:start app at port 3000
//server.js
const Express = require('express');
const PORT = 1234;
const app = Express();
const router = Express.Router();
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', (req, res) => {
    res.send('Birds home page');
});
// define the about route
router.get('/about', (req, res) => {
    res.send('About birds');
});
//module.exports = (app) => {
    app.use('/birds', router);
//};


app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
