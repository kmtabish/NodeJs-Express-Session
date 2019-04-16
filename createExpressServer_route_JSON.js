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

app.get('/emp.json', (req, res) => {
    res.send(JSON.stringify([
        {name: "EMP-1", id: 1},
        {name: "EMP-2", id: 2},
        {name: "EMP-1", id: 3}
    ]));
});

app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
