"use strict";
//Step1:start app at port 3000
//server.js
const Express = require('express');
const PORT = 1234;
const app = Express();
var birds = require('./routes/router-expressRouter')

// ...
app.use('/birds/users', birds)

app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
