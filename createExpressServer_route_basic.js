"use strict";
//Step1:start app at port 3000
//server.js
const Express = require('express');
const PORT = 5000;
const app = Express();
const mware = (req, res, next) =>{
    console.log("middleware called");
    next()
}
//create first route
app.get('/', mware,(req, res) => {
    res.send({test:123});
});

app.get('/got', (req, res) => {
    res.send('Hello World! - GOT');
});

app.listen(PORT, () => {
   console.info("Server is running @:http://localhost:%d", PORT);
});
