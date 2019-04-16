module.exports = (app) =>{
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
}
