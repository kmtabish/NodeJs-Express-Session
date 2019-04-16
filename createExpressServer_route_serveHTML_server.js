"use strict";
//Step1:start app at port 3000
//server.js
const Express = require('express');
const PORT = 1234;
const app = Express();
const router = require('./routes/router-serveHTML_server');
router(app, Express); // call route
//create first route


app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
