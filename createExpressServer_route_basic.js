"use strict";
//Step1:start app at port 3000
//server.js
const Express = require('express');
const PORT = 1234;
const app = Express();

//create first route
app.get('/', (req, res) => {
    res.send('Hello World! - root');
});

app.get('/got', (req, res) => {
    res.send('Hello World! - GOT');
});

app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
