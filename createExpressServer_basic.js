"use strict";
//Step1:start app at port 3000
//server.js
const Express = require('express');
const PORT = 1234;
const app = Express();
//app.listen(PORT);
//Step2: Add callback to listen function
//server.js
app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
