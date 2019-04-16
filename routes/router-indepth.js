module.exports = (app) => {
    app.get('/user', (req, res) => {
        res.send([
            {name: 'Akash', id: 1},
            {name: 'Arun', id: 2},
            {name: 'Priya', id: 3} ]); });
    app.post('/user', (req, res) => {
        res.send('Got a POST request');
    });
    app.put('/user', (req, res) => {
        res.send('Got a PUT request at /user');
    });
    app.delete('/user', (req, res) => {
        res.send('Got a DELETE request at /user'); });
}
