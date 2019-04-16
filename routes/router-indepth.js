module.exports = (app) => {
    app.get('/user', (req, res) => {
        res.send([
            {name: 'User-1', id: 1},
            {name: 'User-2', id: 2},
            {name: 'User-3', id: 3} ]); });
    app.post('/user', (req, res) => {
        res.send('Got a POST request');
    });
    app.put('/user', (req, res) => {
        res.send('Got a PUT request at /user');
    });
    app.delete('/user', (req, res) => {
        res.send('Got a DELETE request at /user'); });
}
